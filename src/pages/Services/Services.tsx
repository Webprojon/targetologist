import branding from "../../assets/Images/Services/branding.png";
import cmm from "../../assets/Images/Services/cmm.png";
import landing from "../../assets/Images/Services/landing.png";
import targeting from "../../assets/Images/Services/targeting.png";
import designer from "../../assets/Images/Services/designer.png";
import copywriter from "../../assets/Images/Services/copywriter.png";

const servicesData = [
	{
		imgSrc: branding,
		title: "Брендинг",
		description: "Идея, концепция, фирменные цвета и шрифты, позиционирование.",
	},
	{
		imgSrc: landing,
		title: "Landing",
		description:
			"Прототип, продающие тексты, дизайн, верстка, триггеры, лид-формы.",
	},
	{
		imgSrc: designer,
		title: "Дизайн",
		description: "Креативы, баннеры, лендинги, оформление соц.сетей.",
	},
	{
		imgSrc: cmm,
		title: "CMM",
		description:
			"Контент-план, хештеги, посты, общение с аудиторией, акции и конкурсы.",
	},
	{
		imgSrc: targeting,
		title: "Таргетинг",
		description: "Офферы, креативы, объявления, сегментация под ЦА, улучшение.",
	},
	{
		imgSrc: copywriter,
		title: "Копирайтинг",
		description:
			"Контент-планы, офферы, продающие текста, коммерчесские предложения.",
	},
];

export default function Services() {
	return (
		<section className="my-16 md:w-[930px] lg:w-[1150px] mx-auto">
			<div className="md:flex justify-between items-center">
				<div className="text-center md:text-left mx-auto xs:max-w-[500px] sm:max-w-[580px] md:w-[520px]">
					<h2 className="font-bold text-[27px] md:text-[37px] lg:text-[44px] lg:leading-[3.8rem]">
						<span className="border-b-[3px] border-blue-500">Лучшие</span>{" "}
						решения для <br /> бизнеса
					</h2>
					<p className="font-medium md:text-[18px] md:leading-[1.9rem] text-black/80 mt-4">
						Комплексный подход для стартапов и малых предприятий, ищущих
						партнеров для своих цифровых медиа, дизайна и развития,
						лидогенерации и коммуникаций – это те услуги, которые я,
						предоставляю для достижения результата
					</p>
				</div>

				<div className="flex justify-center flex-col xs:flex-row mt-10 md:mt-0 gap-6 sm:gap-x-12 md:gap-x-10">
					<div className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-10 md:mt-10">
						{servicesData.slice(0, 3).map((service, index) => (
							<div
								key={index}
								className="service-shadow bg-custom-gradiant border-t-[5px] border-blue-500 rounded-[15px] mx-auto w-[300px] xs:w-[230px] h-[37vh] py-6 px-5"
							>
								<img alt="icon" src={service.imgSrc} className="w-12" />
								<h2 className="font-bold mt-3 mb-4 text-[21px]">
									{service.title}
								</h2>
								<p className="font-semibold text-black/90 leading-[1.4rem]">
									{service.description}
								</p>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-10">
						{servicesData.slice(3, 6).map((service, index) => (
							<div
								key={index}
								className="service-shadow bg-custom-gradiant border-t-[5px] border-blue-500 rounded-[15px] mx-auto w-[300px] xs:w-[230px] h-[37vh] py-6 px-5"
							>
								<img alt="icon" src={service.imgSrc} className="w-12" />
								<h2 className="font-bold mt-3 mb-4 text-[21px]">
									{service.title}
								</h2>
								<p className="font-semibold text-black/90 leading-[1.4rem]">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
