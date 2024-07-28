import GlobalForm from "../../components/Form";

export default function Contact() {
	return (
		<section id="contact" className="bg-image lg:h-[89vh]">
			<div className="mx-auto max-w-[390px] xs:max-w-[490px] pt-[5.5rem] py-10 lg:pt-[6.6rem] md:max-w-[930px] lg:max-w-[1150px]">
				<div className="md:flex gap-x-14">
					<div className="md:w-[1050px] text-center md:text-left lg:text-left lg:mt-6">
						<h1 className="md:mt-10 text-white text-[30px] leading-8 md:text-[50px] lg:text-[56px] md:leading-[4.4rem] font-bold tracking-wide md:block">
							Готовы к{" "}
							<span className="font-bold md:border-b-[3px] border-blue-500">
								потоку
							</span>
							<br />
							клиентов?
						</h1>

						<div className="m-5 md:hidden border-b-[3px] border-blue-500"></div>

						<p className="hidden md:block font-medium text-white mt-5 xs:text-lg md:text-[20px] md:leading-9 md:tracking-wide md:mt-10">
							Увеличу продажи с помощью рекламы в интернете и предоставлю{" "}
							<b>первые обращения клиентов уже через 48 часов</b>
						</p>
					</div>

					<div className="relative-container lg:w-[750px]">
						<div className="hidden border-ping md:block"></div>
						<div className="flex flex-col gap-y-4 text-center md:gap-y-6 md:p-[2rem] lg:p-[3.5rem] md:bg-black/70 md:border-2 border-blue-600 w-full h-full">
							<h2 className="hidden md:block text-white text-[22px] xs:text-[28px] lg:mt-0 lg:text-[25px] font-bold">
								СТРАТЕГИЯ БЕСПЛАТНО
							</h2>
							<p className="text-white xs:text-lg">
								<b>Напишу</b> стратегию по Таргетированной Рекламе для Вашей
								компании <b>бесплатно</b> и презентую ее!
							</p>

							<GlobalForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
