import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Reviews() {
	return (
		<section id="reviews" className="hidden bg-black h-[100vh]">
			<h2 className="text-white font-bold text-[45px] text-center pt-6">
				<span className="border-b-2 border-blue-600">Отзывы</span> от клиентов
			</h2>

			<div className="container">
				<h1 className="heading">Flower Gallery</h1>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
					}}
					pagination={{ el: ".swiper-pagination", clickable: true }}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						//clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Navigation]}
					className="swiper_container"
				>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3062-3739-4261-b738-316235383861__right_b.jpg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3062-3739-4261-b738-316235383861__right_b.jpg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3062-3739-4261-b738-316235383861__right_b.jpg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3062-3739-4261-b738-316235383861__right_b.jpg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3362-6462-4366-b533-646534346533__frame_13.jpeg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3639-6237-4131-b438-393963653065__frame_13.jpeg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3762-6334-4733-b336-346135366461__frame_13.jpeg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3062-3739-4261-b738-316235383861__right_b.jpg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild3062-3739-4261-b738-316235383861__right_b.jpg"
							alt="slide_image"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://vakulenko.online/images/tild6637-3062-4334-b236-643131336230__frame_13.jpeg"
							alt="slide_image"
						/>
					</SwiperSlide>

					<div className="slider-controler">
						<div className="swiper-button-prev slider-arrow">
							{/*<ion-icon name="arrow-back-outline"></ion-icon>*/}
						</div>
						<div className="swiper-button-next slider-arrow">
							{/*<ion-icon name="arrow-forward-outline"></ion-icon>*/}
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</Swiper>
			</div>
		</section>
	);
}
