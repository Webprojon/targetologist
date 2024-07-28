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

const cardItems = [
	{
		id: 1,
		title: "IT Time Academy",
		description: "IT dasturlash o'quv markazi",
		bgImg: itTimeAcademy,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "626",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.32$",
				secondItem: "Murojatchilar narxi ",
			},
			{
				firstItem: "500$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 2,
		title: "Kosmetolog Dietolog ",
		bgImg: casmetic,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "899",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.12$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "300$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 3,
		title: "Ahad Qayum Producer Actor",
		bgImg: ahad,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "2.5000",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.6$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "3000$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 4,
		title: "Anhor Park",
		description: "Toshkentdagi eng katta istirohat bog‘laridan biri bo‘lib",
		bgImg: anhor,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "1.5000",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.8$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "200$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 5,
		title: "Telefon Oldi sotisi Iphone Samsung",
		bgImg: apples,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "1.500",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.17$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "250$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 6,
		title: "Max Power tabiiy tog’ asali",
		bgImg: asal,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "600",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "1$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "100$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 7,
		title: "Respublika dermatologiya va venerologiya markazi",
		bgImg: av,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "500",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.17$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "300$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 8,
		title: "Ayollar kiyimlari",
		bgImg: imanem,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "494",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.33$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "200$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 9,
		title: "Vintilatsa,konitsaner,ustanofka,xizmati",
		bgImg: iqlimuz,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "300",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.77$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "600$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 10,
		title: "KIPRIK UZAYTIRISH Xizmatlari",
		bgImg: kiprik,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "89",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.40$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "200$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 11,
		title: "Respublika dermatologiya va venerologiya markazi",
		bgImg: ozdvkm,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "4.500",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.35$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "600$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 12,
		title: "Zamonaviy  Aksessuarlar",
		bgImg: phoneCase,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "3022",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.10$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "500$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 13,
		title: "Stomatolog",
		bgImg: stamatolg,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "100",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.55$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "400$",
				secondItem: "Reklama Budjeti",
			},
		],
	},

	{
		id: 14,
		title: "Uybozor",
		bgImg: uychi,
		btnText: "КОНСУЛЬТАЦИЮ",
		innerItems: [
			{
				firstItem: "1000",
				secondItem: "Murojatchilar Soni",
			},
			{
				firstItem: "0.33$",
				secondItem: "Murojatchilar Narxi",
			},
			{
				firstItem: "1500$",
				secondItem: "Reklama Budjeti",
			},
		],
	},
];

export default function PortfolioCards() {
	const { numberOfCards } = useGlobalContext();
	useEffect(() => {
		AOS.init({});

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
