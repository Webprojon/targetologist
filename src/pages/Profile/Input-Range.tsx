import { Range } from "react-range";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setRangeValues } from "../../redux/global-slices";

export default function InputRange() {
	const dispatch: AppDispatch = useDispatch();
	const rangeValues = useSelector((state: RootState) => state.user.rangeValues);

	return (
		<div className="relative pt-9">
			<Range
				min={30}
				max={500}
				values={rangeValues}
				onChange={(rangeValues) => dispatch(setRangeValues(rangeValues))}
				renderTrack={({ props, children }) => {
					const { ...restProps } = props;
					const percentage = ((rangeValues[0] - 30) / (500 - 30)) * 100;
					return (
						<div
							{...restProps}
							//key={key}
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
					const { ...restProps } = props;
					return (
						<div
							{...restProps}
							//key={key}
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
