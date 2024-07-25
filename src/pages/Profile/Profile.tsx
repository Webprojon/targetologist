import InputRange from "./Input-Range";

export default function Profile() {
	return (
		<section className="relative bg-black mt-[9rem] mb-10 pt-10 lg:py-14 max-w-[320px] xs:max-w-[460px] sm:max-w-[625px] md:max-w-[925px] lg:max-w-[1540px] mx-auto">
			<div className="lg:relative flex flex-col lg:w-[1150px] mx-auto">
				<div className="text-center lg:text-left px-5 text-white lg:w-[540px]">
					<h2 className="font-bold text-[27px] lg:text-[40px] tracking-wider leading-8 lg:leading-6">
						Есть конкретная{" "}
						<span className="border-b-[3px] border-blue-500">цель?</span>
					</h2>
					<p className="font-medium tracking-wide lg:text-[18px] mt-6 lg:mt-10">
						Заполняйте форму и укажите желаемое количество клиентов, а я
						предложу путь к достижению Ваших целей
					</p>
					<form className="flex flex-col gap-y-4 lg:w-[430px] mt-6 lg:mt-10">
						<input
							type="text"
							placeholder="Имя"
							autoComplete="off"
							className="py-3 px-5 rounded-[25px] text-black/60 placeholder:text-black/60 font-medium outline-none"
						/>
						<input
							type="number"
							autoComplete="off"
							placeholder="(99) 999-99-99"
							className="py-3 px-5 rounded-[28px] text-black/60 placeholder:text-black/60 font-medium outline-none"
						/>
						<input
							type="text"
							autoComplete="off"
							placeholder="Регион продвижения"
							className="py-3 px-5 rounded-[28px] text-black/60 placeholder:text-black/60 font-medium outline-none"
						/>
						<input
							type="text"
							autoComplete="off"
							placeholder="Средний чек"
							className="py-3 px-5 rounded-[28px] text-black/60 placeholder:text-black/60 font-medium outline-none"
						/>
						<p className="font-medium tracking-wide">
							Сколько клиентов необходимо до цели?
						</p>

						<InputRange />

						<div className="flex justify-between w-full">
							<span>30</span>
							<span>500</span>
						</div>

						<button
							className="mb-10 lg:mt-2 text-white font-bold tracking-wider rounded-[28px] bg-blue-600 py-3 px-4 hover:bg-blue-700
								 transition-all"
						>
							УЗНАТЬ РЕЗУЛЬТАТ
						</button>
					</form>
				</div>

				<div>
					<img
						alt="profile img"
						className="lg:absolute -top-[8rem] right-0 lg:w-[550px] object-cover lg:h-[110vh]"
						src="https://vakulenko.online/images/tild3738-6262-4332-b936-383539333965__photo_2021-07-17_083.jpeg"
					/>
				</div>
			</div>
		</section>
	);
}
