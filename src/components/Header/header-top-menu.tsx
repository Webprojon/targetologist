import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { useSwipeable } from "react-swipeable";

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
		if (window.scrollY > 200) {
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
				className={`fixed top-0 w-full h-[4rem] bg-black transition-transform duration-300 flex items-center
				${isScrolled ? "translate-y-0" : "-translate-y-full"} md:hidden`}
			>
				<div className="flex justify-between w-full px-4">
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
				{...handlers}
				className={`fixed top-0 left-0 w-full h-full bg-black/40 transition-transform duration-400 
				${isMenuOpen ? "translate-y-0" : "-translate-y-full"} z-10`}
			>
				<div className="h-[45vh] transition-transform duration-500 bg-white"></div>
			</div>
		</>
	);
}
