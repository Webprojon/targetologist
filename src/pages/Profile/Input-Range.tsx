import { Range } from "react-range";
import { useGlobalContext } from "../../context/global-context";

export default function InputRange() {
	const { rangeValues, setRangeValues } = useGlobalContext();

	return (
		<div className="relative pt-9">
			<Range
				min={30}
				max={500}
				values={rangeValues}
				onChange={(rangeValues) => setRangeValues(rangeValues)}
				renderTrack={({ props, children }) => {
					const { key, ...restProps } = props;
					const percentage = ((rangeValues[0] - 30) / (500 - 30)) * 100;
					return (
						<div
							{...restProps}
							key={key}
							style={{
								...restProps.style,
								background: `linear-gradient(to right, #3b82f6 ${percentage}%, white ${percentage}%)`,
							}}
							className="h-[.1rem] w-full"
						>
							{children}
						</div>
					);
				}}
				renderThumb={({ props }) => {
					const { key, ...restProps } = props;
					return (
						<div
							{...restProps}
							key={key}
							style={{ ...restProps.style }}
							className="w-5 h-5 bg-blue-600 flex justify-center items-center rounded-full"
						>
							<div className="bg-white text-black py-1 px-3 text-[14px] rounded-sm absolute -top-9">
								{rangeValues[0]}
							</div>
							<div />
						</div>
					);
				}}
			/>
		</div>
	);
}
