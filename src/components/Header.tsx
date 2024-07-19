export default function Header() {
	return (
		<header className="absolute left-0 right-0 w-[1325px] mt-4 mx-auto">
			<nav className="flex justify-between items-center">
				<img
					alt="logo"
					className="w-[98px]"
					src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
				/>

				<ul className="flex items-center gap-x-14 h-12 font-bold text-white tracking-wide">
					<li className="hover:border-2 w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px]">
						<a href="#portfolio">КЕЙСЫ</a>
					</li>
					<li className="hover:border-2 w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px]">
						<a href="#reviews">ОТЗЫВЫ</a>
					</li>
					<li className="hover:border-2 w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px]">
						<a href="#contact">КОНТАКТЫ</a>
					</li>
				</ul>

				<div className="cursor-pointer font-bold text-white">
					<span className="border border-sky-600 py-[.4rem] px-3">EN</span>
					<span className="border border-sky-600 py-[.4rem] px-3 bg-sky-600">
						RU
					</span>
				</div>
			</nav>
		</header>
	);
}
