import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	Autoplay,
} from "swiper/modules";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import feedBackOne from "../../assets/Images/Reviews/photo_2024-07-28_09-15-57.jpg";
import feedBackTwo from "../../assets/Images/Reviews/photo_2024-07-28_09-16-43.jpg";
import feedBackThree from "../../assets/Images/Reviews/photo_2024-07-28_09-16-48.jpg";
import feedBackFour from "../../assets/Images/Reviews/photo_2024-07-28_09-16-51.jpg";
import { useTranslation } from "react-i18next";

export default function Reviews() {
	const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const { t } = useTranslation();

	const handleSwiperInit = (swiper: SwiperClass) => {
		setSwiperRef(swiper);
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);

		swiper.on("slideChange", () => {
			setIsBeginning(swiper.isBeginning);
			setIsEnd(swiper.isEnd);

			if (swiper.isEnd) {
				swiper.autoplay.stop();
				setIsPaused(true);
			}
		});

		swiper.on("click", () => {
			if (swiper.autoplay.running) {
				swiper.autoplay.stop();
				setIsPaused(true);
			} else {
				swiper.autoplay.start();
				setIsPaused(false);
			}
		});
	};

	const handlePause = () => {
		if (swiperRef) {
			if (isPaused) {
				swiperRef.autoplay.start();
				setIsPaused(false);
			} else {
				swiperRef.autoplay.stop();
				setIsPaused(true);
			}
		}
	};

	return (
		<section
			id="reviews"
			className="scroll-mt-14 bg-black relative pt-10 md:scroll-mt-0 md:py-12"
		>
			<h2 className="text-white font-bold text-[26px] text-center md:text-[45px]">
				<span className="border-b-2 border-blue-600">
					{t("review-h2-span")}
				</span>{" "}
				{t("review-h2")}
			</h2>

			<button
				onClick={handlePause}
				className="hidden absolute top-[10rem] right-10 z-10 text-blue-500 md:block"
			>
				{isPaused ? (
					<IoMdPlay className="size-6" />
				) : (
					<IoMdPause className="size-6" />
				)}
			</button>

			<div className="py-6 mt-12">
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					slideToClickedSlide={true}
					spaceBetween={80}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 60,
						modifier: 2,
					}}
					pagination={{ el: ".swiper-pagination", clickable: true }}
					navigation={{
						nextEl: ".custom-swiper-button-next",
						prevEl: ".custom-swiper-button-prev",
					}}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					onInit={handleSwiperInit}
					modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
				>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							src={feedBackOne}
							className="h-[90%] w-[24rem] object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							className="h-[90%] w-[24rem] object-cover"
							src="https://vakulenko.online/images/tild3532-3962-4633-a632-346461333431__90094198_83769867341.jpg"
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							src={feedBackTwo}
							className="h-[90%] w-[24rem] object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							className="h-[90%] w-[24rem] object-cover"
							src="https://vakulenko.online/images/tild3264-3037-4636-a235-346532633833__90433352_12734093218.jpg"
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							className="h-[90%] w-[24rem] object-cover"
							src={feedBackThree}
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							className="h-[90%] w-[24rem] object-cover"
							src="https://vakulenko.online/images/tild3536-6136-4261-b130-626663653463__106202438_1691748964.jpg"
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							className="h-[90%] w-[24rem] object-cover"
							src={feedBackFour}
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<img
							alt="slide_image"
							className="h-[90%] w-[24rem] object-cover"
							src="https://vakulenko.online/images/tild3738-3663-4433-a366-346436373630__161713049_2063392612.jpg"
						/>
					</SwiperSlide>
					<SwiperSlide className="w-[16.5rem] h-[70vh]">
						<div
							style={{
								backgroundImage: `url("https://vakulenko.online/images/tild6235-6265-4265-a633-613232323063__bd20749cde034c5b44b4.jpeg")`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
							className="flex flex-col tracking-wide text-center py-20 px-4 text-white h-[90%]"
						>
							<h2 className="font-bold text-[29px] leading-8">
								{t("review-slide-h2")}
							</h2>
							<p className="mt-4 mb-10 text-[17px] text-gray-100">
								{t("review-slide-p")}
							</p>
							<a
								href="#contact"
								className="bg-blue-500 py-[.7rem] font-semibold tracking-wider rounded-[25px]"
							>
								{t("review-slide-btn")}
							</a>
						</div>
					</SwiperSlide>

					<div className="swiper-pagination"></div>

					<div
						className={`custom-swiper-button-prev hidden absolute left-4 top-1/2 transform -translate-y-1/2 w-[3.1rem] h-[3.1rem] z-[999] md:flex 
							items-center justify-center rounded-full bg-slate-800 text-blue-600 shadow-md cursor-pointer transition-opacity duration-300 ease-in-out
							 ${isBeginning ? "opacity-0" : "opacity-100"}`}
					>
						<GoChevronLeft className="size-7" />
					</div>

					<div
						className={`custom-swiper-button-next hidden absolute right-4 top-1/2 transform -translate-y-1/2 w-[3.1rem] h-[3.1rem] z-[999] md:flex 
							items-center justify-center rounded-full bg-slate-800 text-blue-600 shadow-md cursor-pointer transition-opacity duration-300 ease-in-out
							 ${isEnd ? "opacity-0" : "opacity-100"}`}
					>
						<GoChevronRight className="size-7" />
					</div>
				</Swiper>
			</div>
		</section>
	);
}
