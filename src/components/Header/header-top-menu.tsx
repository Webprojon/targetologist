import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import HeaderLogo from "./header-logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineMenu } from "react-icons/md";

export default function ResponsiveMenu() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav
				className={`fixed top-0 w-full h-16 bg-black transition-transform duration-300 flex items-center
				${isScrolled || isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
			>
				<div className="flex justify-between w-full h-12 px-4">
					<img
						alt="logo"
						className="w-[55px] h-[43px]"
						src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
					/>
					<button onClick={handleMenuToggle}>
						{isMenuOpen ? (
							<AiOutlineClose className="size-8 text-white" />
						) : (
							<TfiMenu className="size-8 text-white" />
						)}
					</button>
				</div>
			</nav>

			<div
				onClick={handleMenuToggle}
				className={`fixed top-0 left-0 w-full h-full bg-black/40 transition-transform duration-400 
				${isMenuOpen ? "translate-y-0" : "-translate-y-full"} z-10`}
			>
				<div className="h-[45vh] transition-transform duration-500 bg-white"></div>
			</div>
		</>
	);
}
