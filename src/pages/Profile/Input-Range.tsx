import { useState } from "react";
import { Range } from "react-range";

export default function InputRange() {
	const [values, setValues] = useState([120]);

	return (
		<div className="relative pt-9">
			<Range
				min={30}
				max={500}
				values={values}
				onChange={(values) => setValues(values)}
				renderTrack={({ props, children }) => {
					const percentage = ((values[0] - 30) / (500 - 30)) * 100;
					return (
						<div
							{...props}
							style={{
								...props.style,
								background: `linear-gradient(to right, #3b82f6 ${percentage}%, white ${percentage}%)`,
							}}
							className="h-[.1rem] w-full"
						>
							{children}
						</div>
					);
				}}
				renderThumb={({ props }) => (
					<div
						{...props}
						style={{ ...props.style }}
						className="w-5 h-5 bg-blue-600 flex justify-center items-center rounded-full"
					>
						<div className="bg-white text-black py-1 px-3 text-[14px] rounded-sm absolute -top-9">
							{values[0]}
						</div>
						<div />
					</div>
				)}
			/>
		</div>
	);
}
