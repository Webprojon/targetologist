import { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { useSwipeable } from "react-swipeable";
import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function ResponsiveMenu() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		// overflow-y-hidden when isMenuOpen true
		if (isMenuOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		// when scroll is active
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isMenuOpen]);

	const handleScroll = () => {
		if (window.scrollY > 400) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handlers = useSwipeable({
		onSwipedUp: () => setIsMenuOpen(false),
		onSwipedDown: () => setIsMenuOpen(true),
		trackMouse: true,
	});

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav
				className={`fixed top-0 w-full h-[4rem] flex items-center transition-transform duration-300 md:hidden z-[1000]
				${isScrolled ? "translate-y-0" : "-translate-y-full"}
				${isMenuOpen ? "bg-gray-200" : "bg-black"} 
				`}
			>
				<div className="flex justify-between w-full px-4">
					<img
						alt="logo"
						className="w-[55px] h-[43px]"
						src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
					/>
					<button onClick={handleMenuToggle}>
						{isMenuOpen ? (
							<IoClose className="size-9" />
						) : (
							<TfiMenu className="size-8 text-white" />
						)}
					</button>
				</div>
			</nav>

			<div
				{...handlers}
				className={`fixed top-0 left-0 w-full h-full bg-black/60 transition-transform duration-300 z-[1000]
				${isMenuOpen ? "translate-y-0 top-16" : "-translate-y-full"}`}
			>
				<div className="flex flex-col gap-y-[4.3rem] justify-center h-[52vh] transition-transform duration-300 bg-gray-200">
					<ul
						onClick={handleMenuToggle}
						className="flex flex-col items-center justify-center gap-y-4 text-[24px] tracking-wider text-black/90"
					>
						<li>
							<a href="#portfolio">КЕЙСЫ</a>
						</li>
						<li>
							<a href="#reviews">ОТЗЫВЫ</a>
						</li>
						<li>
							<a href="#contact">КОНТАКТЫ</a>
						</li>
					</ul>

					<div className="flex flex-col justify-center items-center gap-y-6">
						<div className="flex gap-x-3">
							<a
								target="blank"
								href="https://www.facebook.com/"
								className="flex justify-center items-center w-[2rem] h-[2rem] bg-black rounded-full"
							>
								<FaFacebookF className="text-white size-4" />
							</a>

							<a
								target="blank"
								href="https://www.instagram.com/latifov_izzat?igsh=MTh6d3I3M2V1cnFmYg=="
								className="flex justify-center items-center w-[2rem] h-[2rem] bg-black rounded-full"
							>
								<AiFillInstagram className="text-white size-[1.2rem]" />
							</a>
						</div>

						<div className="font-medium flex gap-x-4 text-xl">
							<span>UZ</span>
							<span className="text-blue-600">RU</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
