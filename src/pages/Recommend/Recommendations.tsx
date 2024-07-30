import { useTranslation } from "react-i18next";

export default function Recommendations() {
	const { t } = useTranslation();

	// Card items
	const recommendationsData = [
		{
			name: t("recommend-card-1.name"),
			description: t("recommend-card-1.description"),
			imgSrc:
				"https://vakulenko.online/images/tild6438-6463-4034-a233-353336373662__photo.png",
			stats: [
				{ value: "7400", label: t("recommend-card-1.first.label") },
				{ value: "0,51$", label: t("recommend-card-1.second.label") },
				{ value: "3600$", label: t("recommend-card-1.third.label") },
			],
		},
		{
			name: t("recommend-card-2.name"),
			description: t("recommend-card-2.description"),
			imgSrc:
				"https://vakulenko.online/images/tild6532-3735-4438-a234-353763613533__22.png",
			stats: [
				{ value: "140", label: t("recommend-card-1.first.label") },
				{ value: "3$", label: t("recommend-card-1.second.label") },
				{ value: "420$", label: t("recommend-card-1.third.label") },
			],
		},
		{
			name: t("recommend-card-3.name"),
			description: t("recommend-card-3.description"),
			imgSrc:
				"https://vakulenko.online/images/tild3533-3662-4063-b433-323230336336__33.png",
			stats: [
				{ value: "2000", label: t("recommend-card-1.first.label") },
				{ value: "0,5$", label: t("recommend-card-1.second.label") },
				{ value: "1000$", label: t("recommend-card-1.third.label") },
			],
		},
		{
			name: t("recommend-card-4.name"),
			description: t("recommend-card-4.description"),
			imgSrc:
				"https://vakulenko.online/images/tild6561-6135-4831-a637-633931303232__44.png",
			stats: [
				{ value: "150", label: t("recommend-card-1.first.label") },
				{ value: "2,5$", label: t("recommend-card-1.second.label") },
				{ value: "450$", label: t("recommend-card-1.third.label") },
			],
		},
	];
	return (
		<section className="mx-auto lg:my-16 lg:w-[1150px]">
			<div className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-10">
				{/* Left Side */}
				<div className="flex flex-col gap-y-12 lg:gap-y-16">
					<div className="text-center mx-auto tracking-wider max-w-[300px] xs:max-w-[470px] sm:max-w-[625px] lg:mx-0 lg:w-[450px] lg:text-left">
						<h1 className="font-bold text-[31px] leading-9 xs:text-[38px]">
							{t("recommend-h1")}{" "}
							<span className="border-b-2 border-blue-500">
								{t("recommend-h1-span")}
							</span>
						</h1>
						<p className="mt-6 font-medium text-black/75 text-[17px] xs:text-[19px] lg:mt-4">
							{t("recommend-p")}
						</p>
					</div>

					{recommendationsData.slice(0, 2).map((recommendation, index) => (
						<div
							key={index}
							className="flex flex-col justify-between mx-auto max-w-[300px] py-16 px-4 xs:p-10  xs:h-[52vh] xs:max-w-[460px] sm:max-w-[555px] sm:w-[555px] lg:w-[554px] lg:p-12
							 border-t-[5px] border-blue-500 shadow-[0_0_12px_3px_rgba(0,0,0,.4)]"
						>
							<div className="flex justify-between tracking-wide">
								<div>
									<h2 className="font-bold text-[20px] lg:text-[22px]">
										{recommendation.name}
									</h2>
									<p className="text-[15px] font-medium text-black/50 mt-3 lg:text-md">
										{recommendation.description}
									</p>
								</div>
								<img
									alt="recommendation img"
									className="w-[4.5rem] h-[4.5rem] xs:h-[6.5rem] xs:w-[6.5rem]"
									src={recommendation.imgSrc}
								/>
							</div>

							<div className="mt-12 flex justify-between">
								{recommendation.stats.map((stat, idx) => (
									<div key={idx} className="flex flex-col tracking-wide">
										<span className="font-bold text-[22px] xs:text-[32px]">
											{stat.value}
										</span>
										<span className="font-medium text-[14px] text-black/80 xs:text-[17px]">
											{stat.label.split(" ").map((word, i) => (
												<span key={i}>
													{word}
													<br />
												</span>
											))}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Right Side */}
				<div className="flex flex-col gap-y-12 lg:gap-y-16 lg:mt-[5.5rem]">
					{recommendationsData.slice(2, 4).map((recommendation, index) => (
						<div
							key={index}
							className="flex flex-col justify-between mx-auto max-w-[300px] py-16 px-4 xs:p-10 xs:h-[52vh] xs:max-w-[460px] sm:max-w-[555px] sm:w-[555px] lg:w-[554px] lg:p-12
							 border-t-[5px] border-blue-500 shadow-[0_0_12px_3px_rgba(0,0,0,.4)]"
						>
							<div className="flex justify-between tracking-wide">
								<div>
									<h2 className="font-bold text-[20px] xs:text-[22px]">
										{recommendation.name}
									</h2>
									<p className="text-[15px] font-medium text-black/50 mt-3 xs:text-md">
										{recommendation.description}
									</p>
								</div>
								<img
									alt="recommendation img"
									className="w-[4.5rem] h-[4.5rem] xs:h-[6.5rem] xs:w-[6.5rem]"
									src={recommendation.imgSrc}
								/>
							</div>

							<div className="mt-12 flex justify-between">
								{recommendation.stats.map((stat, idx) => (
									<div key={idx} className="flex flex-col tracking-wide">
										<span className="font-bold text-[22px] xs:text-[32px]">
											{stat.value}
										</span>
										<span className="font-medium text-[14px] text-black/80 xs:text-[17px]">
											{stat.label.split(" ").map((word, i) => (
												<span key={i}>
													{word}
													<br />
												</span>
											))}
										</span>
									</div>
								))}
							</div>
						</div>
					))}

					<div
						className="flex flex-col lg:flex-row justify-center items-center mx-auto max-w-[300px] xs:max-w-[460px] lg:mx-0 lg:items-end lg:gap-x-4
					 lg:max-w-[554px] lg:w-[554px]"
					>
						<h2 className="font-bold text-[24px] leading-9 text-center xs:text-[28px]">
							{t("recommend-h2")} <br /> {t("recommend-h2-span")}
						</h2>
						<button className="text-white font-bold tracking-wide rounded-[30px] mt-8 mb-14 bg-blue-500 py-[1rem] text-[15px] px-7 hover:bg-blue-600 transition-all lg:m-0 lg:py-[1.2rem]">
							{t("recommend-btn")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
