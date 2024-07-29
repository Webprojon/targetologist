import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../../context/global-context";

import itTimeAcademy from "../../assets/Images/Portfolio/itTime.jpg";
import casmetic from "../../assets/Images/Portfolio/casmetic.jpg";
import ahad from "../../assets/Images/Portfolio/ahad.jpg";
import anhor from "../../assets/Images/Portfolio/anhor.jpg";
import apples from "../../assets/Images/Portfolio/apples.jpeg";
import asal from "../../assets/Images/Portfolio/asal.jpg";
import av from "../../assets/Images/Portfolio/av.jpg";
import imanem from "../../assets/Images/Portfolio/imanem.jpg";
import iqlimuz from "../../assets/Images/Portfolio/iqlim-uz.jpg";
import kiprik from "../../assets/Images/Portfolio/kiprik.jpg";
import ozdvkm from "../../assets/Images/Portfolio/ozdvkm.jpg";
import phoneCase from "../../assets/Images/Portfolio/phoneCase2.jpg";
import stamatolg from "../../assets/Images/Portfolio/stamatalog.jpg";
import uychi from "../../assets/Images/Portfolio/uychi.jpg";
import { useTranslation } from "react-i18next";

export default function PortfolioCards() {
	const { numberOfCards } = useGlobalContext();
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init({});

		const handleResize = () => {
			//setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Card items
	const cardItems = [
		{
			id: 1,
			title: t("portf-card-1.title"),
			description: t("portf-card-1.description"),
			bgImg: itTimeAcademy,
			btnText: t("portf-card-1.btnText"),
			innerItems: [
				{
					firstItem: "626",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.32$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "500$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 2,
			title: t("portf-card-2.title"),
			bgImg: casmetic,
			btnText: t("portf-card-2.btnText"),
			innerItems: [
				{
					firstItem: "899",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.12$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "300$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 3,
			title: t("portf-card-3.title"),
			bgImg: ahad,
			btnText: t("portf-card-3.btnText"),
			innerItems: [
				{
					firstItem: "2.5000",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.6$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "3000$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 4,
			title: t("portf-card-4.title"),
			description: t("portf-card-4.description"),
			bgImg: anhor,
			btnText: t("portf-card-4.btnText"),
			innerItems: [
				{
					firstItem: "1.5000",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.8$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "200$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 5,
			title: t("portf-card-5.title"),
			bgImg: apples,
			btnText: t("portf-card-5.btnText"),
			innerItems: [
				{
					firstItem: "1.500",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.17$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "250$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 6,
			title: t("portf-card-6.title"),
			bgImg: asal,
			btnText: t("portf-card-6.btnText"),
			innerItems: [
				{
					firstItem: "600",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "1$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "100$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 7,
			title: t("portf-card-7.title"),
			bgImg: av,
			btnText: t("portf-card-7.btnText"),
			innerItems: [
				{
					firstItem: "500",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.17$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "300$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 8,
			title: t("portf-card-8.title"),
			bgImg: imanem,
			btnText: t("portf-card-8.btnText"),
			innerItems: [
				{
					firstItem: "494",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.33$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "200$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 9,
			title: t("portf-card-9.title"),
			bgImg: iqlimuz,
			btnText: t("portf-card-9.btnText"),
			innerItems: [
				{
					firstItem: "300",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.77$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "600$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 10,
			title: t("portf-card-10.title"),
			bgImg: kiprik,
			btnText: t("portf-card-1.btnText"),
			innerItems: [
				{
					firstItem: "89",
					secondItem: t("portf-card-10.first.secondItem"),
				},
				{
					firstItem: "0.40$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "200$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 11,
			title: t("portf-card-11.title"),
			bgImg: ozdvkm,
			btnText: t("portf-card-11.btnText"),
			innerItems: [
				{
					firstItem: "4.500",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.35$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "600$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 12,
			title: t("portf-card-12.title"),
			bgImg: phoneCase,
			btnText: t("portf-card-12.btnText"),
			innerItems: [
				{
					firstItem: "3022",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.10$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "500$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 13,
			title: t("portf-card-13.title"),
			bgImg: stamatolg,
			btnText: t("portf-card-13.btnText"),
			innerItems: [
				{
					firstItem: "100",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.55$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "400$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},

		{
			id: 14,
			title: t("portf-card-14.title"),
			bgImg: uychi,
			btnText: t("portf-card-14.btnText"),
			innerItems: [
				{
					firstItem: "1000",
					secondItem: t("portf-card-1.first.secondItem"),
				},
				{
					firstItem: "0.33$",
					secondItem: t("portf-card-1.second.secondItem"),
				},
				{
					firstItem: "1500$",
					secondItem: t("portf-card-1.third.secondItem"),
				},
			],
		},
	];

	return (
		<div className="flex flex-col gap-y-10 xs:gap-y-[8rem] sm:gap-y-[6rem] lg:gap-y-[8.5rem] mt-9 sm:mt-[6rem]">
			{cardItems
				.slice(0, numberOfCards)
				.map(({ bgImg, title, description, innerItems, btnText }, index) => {
					const bgImage = typeof bgImg === "string" ? bgImg : bgImg;

					return (
						<div
							data-aos="fade-up"
							key={index}
							style={{
								backgroundImage: `linear-gradient(to ${
									index % 2 === 0 ? "left" : "right"
								}, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 120%), url(${bgImage})`,
							}}
							className={`flex flex-col bg-right md:w-[850px] lg:w-[1160px] lg:h-[60vh] shadow-[0_0_12px_3px_rgba(0,0,0,1)] lg:shadow-none 
									hover:shadow-[0_0_10px_5px_rgba(0,0,0,1)]
								 transition-shadow duration-300 ${
										index % 2 === 0 ? "md:self-start" : "md:self-end"
									}`}
						>
							<div
								className={`md:w-[24rem] flex flex-col xs:items-center md:items-start my-[2.2rem] ml-6 md:mx-6 lg:mx-8 text-white ${
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

								<div className="flex flex-col xs:flex-row gap-y-8 xs:gap-x-7 sm:gap-x-10 md:gap-x-10 mt-12 xs:mt-14 lg:mt-16">
									{innerItems.map(({ firstItem, secondItem }, idx) => (
										<div key={idx} className="flex flex-col">
											<span className="text-[26px] xs:text-[28px] sm:text-[36px] md:text-[28px] lg:text-[34px] tracking-tight font-bold">
												{firstItem}
											</span>
											{secondItem.split(" ").map((first, i) => (
												<span
													key={i}
													className="sm:text-[18px] md:text-[15px] lg:text-[17px] font-medium"
												>
													{first}
													<br />
												</span>
											))}
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
					);
				})}
		</div>
	);
}
