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
		<section className="hidden my-16 lg:w-[1150px] mx-auto">
			<div className="flex justify-between items-center">
				<div className="w-[520px]">
					<h2 className="font-bold text-[44px] leading-[3.8rem]">
						<span className="border-b-[3px] border-blue-500">Лучшие</span>{" "}
						решения для <br /> бизнеса
					</h2>
					<p className="font-medium text-[18px] leading-[1.9rem] text-black/80 mt-4">
						Комплексный подход для стартапов и малых предприятий, ищущих
						партнеров для своих цифровых медиа, дизайна и развития,
						лидогенерации и коммуникаций – это те услуги, которые я,
						предоставляю для достижения результата
					</p>
				</div>

				<div className="flex gap-x-10">
					{/* Left */}
					<div className="flex flex-col gap-y-10 mt-10">
						{servicesData.slice(0, 3).map((service, index) => (
							<div
								key={index}
								className="service-shadow bg-custom-gradiant border-t-[5px] border-blue-500 rounded-[15px] w-[230px] h-[37vh] py-6 px-5"
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

					{/* Right */}
					<div className="flex flex-col gap-y-10">
						{servicesData.slice(3, 6).map((service, index) => (
							<div
								key={index}
								className="service-shadow bg-custom-gradiant border-t-[5px] border-blue-500 rounded-[15px] w-[230px] h-[37vh] py-6 px-5"
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
