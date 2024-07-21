import { IoChevronDownOutline } from "react-icons/io5";

export default function Home() {
	return (
		<main className="bg-image lg:h-[92vh]">
			<section className="mx-auto max-w-[350px] xs:max-w-[430px] pt-[5.5rem] py-10 lg:pt-[7rem] lg:max-w-[1150px]">
				<div className="lg:flex gap-x-14">
					<div className="text-center cursor-pointer font-bold text-white lg:hidden">
						<span className="border border-blue-600 py-[.3rem] px-3">EN</span>
						<span className="border border-blue-600 py-[.3rem] px-3 bg-blue-600">
							RU
						</span>
					</div>

					<div className="text-center lg:text-left lg:mt-6">
						<div className="flex justify-center items-center mt-10 gap-x-4 lg:hidden">
							<img
								alt="logo"
								className="w-[64px] h-[54px]"
								src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
							/>
							<h1 className="text-white text-[19px] font-semibold tracking-wide">
								<span className="font-thin text-gray-400 border-b-2 border-blue-600">
									Антон Вакуленко <br />
								</span>
								Таргетолог
							</h1>
						</div>

						<h1 className="hidden text-white lg:text-[62px] lg:leading-[4.7rem] font-bold tracking-wide lg:block">
							<span className="font-bold border-b-2 border-blue-600">
								Таргетолог
							</span>
							<br />
							Антон Вакуленко
						</h1>
						<h3 className="text-white tracking-wide font-bold text-[22px] mt-6 lg:hidden">
							Комплекс маркетинговых инструментов для Вашего бизнеса
						</h3>
						<p className="text-white mt-5 lg:text-[20px] lg:mt-10">
							Увеличу продажи с помощью рекламы в интернете и предоставлю{" "}
							<b>первые обращения клиентов уже через 48 часов</b>
						</p>
						<IoChevronDownOutline className="animate-bounce size-10 mx-auto mt-8 text-blue-600 md:hidden" />
					</div>

					<div className="relative-container lg:w-[800px]">
						<div className="hidden border-ping lg:block"></div>
						<div className="flex flex-col gap-y-4 text-center lg:gap-y-6 lg:p-[3.5rem] lg:bg-black/70 lg:border-2 border-blue-600 w-full h-full">
							<h2 className="text-white text-[22px] lg:mt-0 lg:text-[25px] font-bold">
								СТРАТЕГИЯ БЕСПЛАТНО
							</h2>
							<p className="text-white lg:text-lg">
								<b>Напишу</b> стратегию по Таргетированной Рекламе для Вашей
								компании <b>бесплатно</b> и презентую ее!
							</p>
							<form className="px-4 lg:p-0 mt-4 w-full flex flex-col gap-y-5">
								<input
									type="text"
									required
									placeholder="Имя"
									className="rounded-[28px] bg-zinc-800 py-[1rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
								/>
								<input
									type="number"
									required
									placeholder="(99) 999-99-99"
									className="rounded-[28px] bg-zinc-800 py-[1rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
								/>
								<button className="text-white font-bold tracking-wide rounded-[28px] bg-blue-600 py-[1rem] px-5 hover:bg-blue-700 transition-all">
									ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
