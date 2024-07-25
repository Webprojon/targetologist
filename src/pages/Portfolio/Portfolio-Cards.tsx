import { useEffect, useState } from "react";

const cardItems = [
	{
		id: 1,
		title: "Пригон элитных авто",
		description: "Пригон элитных автомобилей под заказ",
		bgImg:
			"https://vakulenko.online/images/tild3964-3062-4034-b164-363163623164__left_b.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild3062-3739-4261-b738-316235383861__right_b.jpg",
		btnText: "ХОЧУ ТАК ЖЕ",
		innerItems: [
			{
				firstItem: "2800$",
				secondItem: "Инвестиции в рекламу",
			},
			{
				firstItem: "90",
				secondItem: "Продажи",
			},
			{
				firstItem: "3,6 млн $",
				secondItem: "Продали авто на",
			},
		],
	},

	{
		id: 2,
		title: "Realty Summit",
		description: "Продажа билетов на саммит.",
		bgImg:
			"https://vakulenko.online/images/tild3733-3735-4536-b739-653732373836__group_2_3.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3362-6462-4366-b533-646534346533__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "2594$",
				secondItem: "Инвестиции в рекламу",
			},
			{
				firstItem: "473",
				secondItem: "Продажи",
			},
			{
				firstItem: "56 059$",
				secondItem: "Чистой прибыли",
			},
		],
	},

	{
		id: 3,
		title: "Пригон авто из США",
		description: "Пригон элитных автомобилей под заказ",
		bgImg:
			"https://vakulenko.online/images/tild6665-6561-4132-b331-386161386432__2.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild3639-6237-4131-b438-393963653065__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "500",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "0,8$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "2 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 4,
		title: "TOWNHOUSE",
		description: "Продажа таун-хаусов",
		bgImg:
			"https://vakulenko.online/images/tild3039-3965-4537-a663-343638376263__1.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild3166-6161-4562-a637-633263653232__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "870",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "0,68$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "3 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 5,
		title: "Большие киндеры",
		description: "Привлечение клиентов покупку больших подарочных киндеров",
		bgImg:
			"https://vakulenko.online/images/tild3463-6432-4162-b730-646131333538__4.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild3762-6334-4733-b336-346135366461__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "1200",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "0,87$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "2 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 6,
		title: "Продажа елок в США",
		description: "Продажа дизайнерских деревянных елок на территории США",
		bgImg:
			"https://vakulenko.online/images/tild3234-3534-4165-a535-653265303930__5.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild6637-3062-4334-b236-643131336230__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "15000$",
				secondItem: "продали на сумму",
			},
			{
				firstItem: "800$",
				secondItem: "рекламный бюджет",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 7,
		title: "Авиационный центр в Латвии",
		description:
			"Рекламная кампания была нацелен на привлечение абитуриентов на обучение профессии авиамеханик",
		bgImg:
			"https://vakulenko.online/images/tild3763-3437-4538-b263-386566616337__6.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild3030-3332-4330-a562-613262616130__frame_13.jpeg",
		btnText: "ХОЧУ ТАК ЖЕ",
		innerItems: [
			{
				firstItem: "500",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "1,2$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 8,
		title: "Оптовая продажа экопосуды",
		description:
			"Целью рекламной кампании было привлечение оптовых клиентов на покупок биоразлагаемой",
		bgImg:
			"https://vakulenko.online/images/tild3234-3234-4832-b465-656431663539__7.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild6534-6435-4430-a530-653630646664__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "1200",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "0,7$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "2 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 9,
		title: "Пансионат для престарелых",
		description:
			"Привлечение клиентов для обслуживания их пожилых родственников",
		bgImg:
			"https://vakulenko.online/images/tild6566-3732-4538-b539-333532336663__8.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild3233-3961-4133-a463-303539633030__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "122",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "2$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "3 нед.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 10,
		title: "Бизнес с Китаем",
		description:
			"Привлечение клиентов для для полного сопровождения бизнеса связанного с Китаем",
		bgImg:
			"https://vakulenko.online/images/tild6332-6537-4939-b935-323638356238__9.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild6139-6263-4562-a464-373165653362__frame_13.jpeg",
		btnText: "ХОЧУ ТАК ЖЕ",
		innerItems: [
			{
				firstItem: "280",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "1,6$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 11,
		title: "Европейский квартал",
		description: "Привлечение клиентов для элитного застройщика в Житомире",
		bgImg:
			"https://vakulenko.online/images/tild6362-3931-4035-b931-623433656562__group_1.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3837-6164-4938-b766-373461333139__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "1485",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "0,55$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "7 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 12,
		title: "Event Academy",
		description: "Продажа билетов на курсы по онлайн ивентам через вебинар",
		bgImg:
			"https://vakulenko.online/images/tild3233-6632-4165-a361-363439383032__group_1_2.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3233-6632-4165-a361-363439383032__group_1_2.png",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "1351",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "1,38$",
				secondItem: "стоимость регистрации",
			},
			{
				firstItem: "7 дн.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 13,
		title: "Assist",
		description: "Продажа удалённого ассистента для предпринимателей",
		bgImg:
			"https://vakulenko.online/images/tild6331-6261-4632-b831-643136356165__group_1_3.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3435-6638-4239-b162-616365356266__frame_13.jpeg",
		btnText: "ХОЧУ ТАК ЖЕ",
		innerItems: [
			{
				firstItem: "200",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "6,1$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 14,
		title: "Bita.kz",
		description: "Продажа подарочных бит по СНГ",
		bgImg:
			"https://vakulenko.online/images/tild6665-3334-4330-b637-633538646161__group_2.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3462-3533-4338-b763-303231656539__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "500",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "0,5$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 15,
		title: "Gabri",
		description: "Строительство домов под ключ",
		bgImg:
			"https://vakulenko.online/images/tild3034-3530-4835-b464-643964303931__group_1_5.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3639-3262-4665-a661-633032613934__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "130",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "3,5$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "2 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 16,
		title: "Sun Garden",
		description: "Озеленение участков, продажа рулонного газона",
		bgImg:
			"https://vakulenko.online/images/tild6236-3834-4431-b732-393630363237__group_2_1.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3463-6538-4333-b665-303163333630__frame_13.jpeg",
		btnText: "ХОЧУ ТАК ЖЕ",
		innerItems: [
			{
				firstItem: "150",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "2,5$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 17,
		title: "Rois",
		description: "Продажа разработок презентаций",
		bgImg:
			"https://vakulenko.online/images/tild3635-6363-4532-b461-373933303265__group_1_6.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3239-3339-4430-b939-653130383938__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "100",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "5,5$",
				secondItem: "стоимость заявки",
			},
			{
				firstItem: "2 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 18,
		title: "Panorama",
		description: "Остекление фасадов зданий",
		bgImg:
			"https://vakulenko.online/images/tild3236-6461-4338-b561-313139666436__group_2_2.png",
		bgImgRes:
			"https://vakulenko.online/images/tild6438-3639-4862-a537-383664376535__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "136",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "2,5$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "2 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 19,
		title: "Wins Meb",
		description: "Продажа декоративных лестниц",
		bgImg:
			"https://vakulenko.online/images/tild6164-6130-4235-b339-323238393733__group_1_7.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3339-3731-4461-b739-663463383037__frame_13.jpeg",
		btnText: "ХОЧУ ТАК ЖЕ",
		innerItems: [
			{
				firstItem: "256",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "1,3$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 20,
		title: "Татумастер",
		description: "Привлечение клиентов на услуги тату",
		bgImg:
			"https://vakulenko.online/images/tild6238-6439-4565-a436-613630663530__3.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild6131-3936-4438-b232-386332656636__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "1500",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "0,4$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "5 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 21,
		title: "Rodos",
		description: "Продажа входных и межкомнатных дверей",
		bgImg:
			"https://vakulenko.online/images/tild6130-3761-4538-b763-666330393230__group_1_8.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3634-3630-4464-b338-366337376336__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "256",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "1,2$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "2 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 22,
		title: "ZBIS.CLUB",
		description: "Онлайн клуб предпринимателей",
		bgImg:
			"https://vakulenko.online/images/tild3131-6566-4264-b336-316430306634__group_2_4.png",
		bgImgRes:
			"https://vakulenko.online/images/tild3334-3163-4032-a265-333664653637__frame_13.jpeg",
		btnText: "ХОЧУ ТАК ЖЕ",
		innerItems: [
			{
				firstItem: "157",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "1,2$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 23,
		title: "Продажа удаленных менеджеров",
		description:
			"Привлечение клиентов, которым были необходимы удаленные менеджеры по продажам",
		bgImg:
			"https://vakulenko.online/images/tild6266-3062-4938-b862-373465303030__10.jpg",
		bgImgRes:
			"https://vakulenko.online/images/tild6136-6233-4266-a530-346663613933__frame_13.jpeg",
		btnText: "ОБСУДИТЬ ПРОЕКТ",
		innerItems: [
			{
				firstItem: "150",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "2,3$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "1 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},

	{
		id: 24,
		title: "Продажа билетов на строительный саммит",
		//description: "Озеленение участков, продажа рулонного газона",
		bgImg:
			"https://vakulenko.online/images/tild3530-6636-4665-b363-623063623661__group_2_5.png",
		bgImgRes:
			"https://vakulenko.online/images/tild6430-3862-4462-b363-326163346266__frame_13.jpeg",
		btnText: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "1553",
				secondItem: "целевых обращений",
			},
			{
				firstItem: "1,67$",
				secondItem: "стоимость обращения",
			},
			{
				firstItem: "2,5 мес.",
				secondItem: "длительность кампанииа",
			},
		],
	},
];

interface PortfolioCardsProps {
	numberOfCards: number;
}

export default function PortfolioCards({ numberOfCards }: PortfolioCardsProps) {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="flex flex-col gap-y-10 xs:gap-y-[8rem] sm:gap-y-[6rem] lg:gap-y-[8.5rem] mt-9 sm:mt-[6rem]">
			{cardItems
				.slice(0, numberOfCards)
				.map(
					(
						{ bgImg, bgImgRes, title, description, innerItems, btnText },
						index,
					) => (
						<div
							key={index}
							style={{
								backgroundImage: `url(${width <= 980 ? bgImgRes : bgImg})`,
							}}
							className={`flex flex-col bg-center bg-repeat bg-cover md:w-[850px] lg:w-[1160px] lg:h-[60vh] shadow-[0_0_12px_3px_rgba(0,0,0,1)] lg:shadow-none 
									hover:shadow-[0_0_10px_5px_rgba(0,0,0,1)]
								 transition-shadow duration-300 ${
										index % 2 === 0 ? "md:self-start" : "md:self-end"
									}`}
						>
							<div
								className={`md:w-[26rem] lg:w-[29rem] flex flex-col xs:items-center md:items-start my-[2.2rem] ml-6 md:mx-6 lg:mx-8 text-white ${
									index % 2 === 0 ? "md:self-end" : "md:self-start"
								}`}
							>
								<div>
									<h2 className="font-semibold text-[25px] xs:text-center xs:text-[30px] md:text-left lg:text-[28px] lg:leading-8">
										{title}
									</h2>
									<p className="pt-3 font-medium sm:text-[18px] lg:text-[18px] lg:leading-6">
										{description}
									</p>
								</div>

								<div className="flex flex-col xs:flex-row gap-y-8 xs:gap-x-7 sm:gap-x-10 md:gap-x-6 mt-12 xs:mt-14 lg:mt-16">
									{innerItems.map(({ firstItem, secondItem }, idx) => (
										<div key={idx} className="flex flex-col">
											<span className="text-[26px] xs:text-[28px] sm:text-[36px] md:text-[28px] lg:text-[34px] tracking-tight font-bold">
												{firstItem}
											</span>
											<span className="sm:text-[18px] md:text-[15px] lg:text-[17px] font-medium">
												{secondItem}
											</span>
										</div>
									))}
								</div>

								<a href="#contact" className="mt-12 xs:mt-14 sm:mt-16 lg:mt-16">
									<button className="w-[12.2rem] leading-4 font-bold border-2 text-[15px] rounded-[27px] py-3 px-6 hover:scale-105 transition-all">
										{btnText}
									</button>
								</a>
							</div>
						</div>
					),
				)}
		</div>
	);
}
