const recommendationsData = [
	{
		name: "Alisher",
		description: "Основатель крупнейшего ивент комьюнити. Open Event Club",
		imgSrc:
			"https://vakulenko.online/images/tild6438-6463-4034-a233-353336373662__photo.png",
		stats: [
			{ value: "7400", label: "целевых обращений" },
			{ value: "0,51$", label: "стоимость заявки" },
			{ value: "3600$", label: "рекламный бюджет" },
		],
	},
	{
		name: "Александр",
		description:
			"Александр Центральная Ипотечная Корпорация - привлечение клиентов на покупку квартир",
		imgSrc:
			"https://vakulenko.online/images/tild6532-3735-4438-a234-353763613533__22.png",
		stats: [
			{ value: "140", label: "целевых обращений" },
			{ value: "3$", label: "стоимость заявки" },
			{ value: "420$", label: "рекламный бюджет" },
		],
	},
	{
		name: "Rustam",
		description: "Открытка кубики привлечение клиентов",
		imgSrc:
			"https://vakulenko.online/images/tild3533-3662-4063-b433-323230336336__33.png",
		stats: [
			{ value: "2000", label: "целевых обращений" },
			{ value: "0,5$", label: "стоимость заявки" },
			{ value: "1000$", label: "рекламный бюджет" },
		],
	},
	{
		name: "Jasurbek",
		description:
			"Промышленные котлы цель которых обогрев коммерческих площадей от 1000м2",
		imgSrc:
			"https://vakulenko.online/images/tild6561-6135-4831-a637-633931303232__44.png",
		stats: [
			{ value: "150", label: "целевых обращений" },
			{ value: "2,5$", label: "стоимость заявки" },
			{ value: "450$", label: "рекламный бюджет" },
		],
	},
];

export default function Recommendations() {
	return (
		<section className="lg:my-16 lg:w-[1150px] mx-auto">
			<div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-10">
				{/* Left Side */}
				<div className="flex flex-col gap-y-12 lg:gap-y-16">
					<div className="text-center lg:text-left mx-auto lg:mx-0 max-w-[300px] xs:max-w-[470px] sm:max-w-[625px] lg:w-[450px] tracking-wider">
						<h1 className="font-bold text-[31px] leading-9 xs:text-[38px]">
							Меня{" "}
							<span className="border-b-2 border-blue-500">рекомендуют</span>
						</h1>
						<p className="mt-6 lg:mt-4 font-medium text-black/75 text-[17px] xs:text-[19px]">
							Сейчас у меня находится более 10 проектов на постоянном
							обслуживании, которым я ежемесячно привлекаю максимальное
							количество целевых обращений
						</p>
					</div>

					{recommendationsData.slice(0, 2).map((recommendation, index) => (
						<div
							key={index}
							className="flex flex-col justify-between xs:h-[52vh] mx-auto max-w-[300px] xs:max-w-[460px] sm:max-w-[555px] sm:w-[555px] lg:w-[554px] py-16 px-4 xs:p-10 lg:p-12
							 border-t-[5px] border-blue-500 shadow-[0_0_12px_3px_rgba(0,0,0,.4)]"
						>
							<div className="flex justify-between tracking-wide">
								<div>
									<h2 className="font-bold text-[20px] lg:text-[22px]">
										{recommendation.name}
									</h2>
									<p className="text-[15px] lg:text-md font-medium text-black/50 mt-3">
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
										<span className="font-medium text-[14px] xs:text-[17px] text-black/80">
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
				<div className="lg:mt-[5.5rem] flex flex-col gap-y-12 lg:gap-y-16">
					{recommendationsData.slice(2, 4).map((recommendation, index) => (
						<div
							key={index}
							className="flex flex-col justify-between xs:h-[52vh] mx-auto max-w-[300px] xs:max-w-[460px] sm:max-w-[555px] sm:w-[555px] lg:w-[554px] py-16 px-4 xs:p-10 lg:p-12
							 border-t-[5px] border-blue-500 shadow-[0_0_12px_3px_rgba(0,0,0,.4)]"
						>
							<div className="flex justify-between tracking-wide">
								<div>
									<h2 className="font-bold text-[20px] xs:text-[22px]">
										{recommendation.name}
									</h2>
									<p className="text-[15px] xs:text-md font-medium text-black/50 mt-3">
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
										<span className="font-medium text-[14px] xs:text-[17px] text-black/80">
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
						className="flex flex-col lg:flex-row justify-center items-center lg:items-end lg:gap-x-4 mx-auto lg:mx-0 max-w-[300px] xs:max-w-[460px]
					 lg:max-w-[554px] lg:w-[554px]"
					>
						<h2 className="font-bold text-[24px] xs:text-[28px] leading-9 text-center">
							Хотите такой же <br /> результат?
						</h2>
						<button className="text-white font-bold tracking-wide rounded-[30px] mt-8 mb-14 lg:m-0 bg-blue-500 py-[1rem] lg:py-[1.2rem] text-[15px] px-7 hover:bg-blue-600 transition-all">
							ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
