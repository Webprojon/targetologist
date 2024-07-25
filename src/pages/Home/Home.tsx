import { IoChevronDownOutline } from "react-icons/io5";

export default function Home() {
	return (
		<main className="bg-image sm:hidden md:block lg:h-[89vh]">
			<section className="mx-auto max-w-[390px] xs:max-w-[490px] pt-[5.5rem] py-10 lg:pt-[6.6rem] md:max-w-[930px] lg:max-w-[1150px]">
				<div className="md:flex gap-x-14">
					<div className="text-center cursor-pointer font-bold text-white xs:hidden">
						<span className="border border-blue-600 py-[.4rem] px-5">UZ</span>
						<span className="border border-blue-600 py-[.4rem] px-5 bg-blue-600">
							RU
						</span>
					</div>

					<div className="md:w-[1050px] text-center md:text-left lg:text-left lg:mt-6">
						<div className="flex justify-center items-center mt-10 gap-x-4 xs:mt-0 md:hidden">
							<img
								alt="logo"
								className="w-[80px] h-[70px]"
								src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
							/>
							<h1 className="text-white text-[19px] font-semibold tracking-wide xs:text-[28px]">
								<span className="font-extralight text-gray-400 border-b-2 border-blue-600">
									Izzatbek Latifov <br />
								</span>
								Таргетолог
							</h1>
						</div>

						<h1 className="hidden text-white md:text-[50px] lg:text-[62px] md:leading-[4.4rem] lg:leading-[4.7rem] font-bold tracking-wide md:block">
							<span className="font-bold border-b-2 border-blue-600">
								Таргетолог
							</span>
							<br />
							Izzatbek Latifov
						</h1>
						<h3 className="text-white tracking-wide font-bold text-[22px] mt-6 md:hidden">
							Комплекс маркетинговых инструментов для Вашего бизнеса
						</h3>
						<p className="font-medium text-white mt-5 xs:text-lg md:text-[20px] md:leading-9 md:tracking-wide md:mt-10">
							Увеличу продажи с помощью рекламы в интернете и предоставлю{" "}
							<b>первые обращения клиентов уже через 48 часов</b>
						</p>
						<IoChevronDownOutline className="animate-bounce size-10 mx-auto mt-8 text-blue-600 md:hidden" />
					</div>

					<div className="relative-container lg:w-[750px]">
						<div className="hidden border-ping md:block"></div>
						<div className="flex flex-col gap-y-4 text-center md:gap-y-6 md:p-[2rem] lg:p-[3.5rem] md:bg-black/70 md:border-2 border-blue-600 w-full h-full">
							<h2 className="text-white text-[22px] xs:text-[28px] lg:mt-0 lg:text-[25px] font-bold">
								СТРАТЕГИЯ БЕСПЛАТНО
							</h2>
							<p className="text-white xs:text-lg">
								<b>Напишу</b> стратегию по Таргетированной Рекламе для Вашей
								компании <b>бесплатно</b> и презентую ее!
							</p>
							<form className="px-4 md:px-2 mt-4 w-full flex flex-col gap-y-5 xs:px-12">
								<input
									type="text"
									required
									placeholder="Имя"
									className="rounded-[28px] bg-zinc-800 py-[1rem] lg:py-[.9rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
								/>
								<input
									type="number"
									required
									placeholder="(99) 999-99-99"
									className="rounded-[28px] bg-zinc-800 py-[1rem] lg:py-[.9rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
								/>
								<button
									className="text-white font-bold tracking-wide rounded-[28px] bg-blue-600 py-[1rem] lg:py-[.9rem] px-5 hover:bg-blue-700
								 transition-all"
								>
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
