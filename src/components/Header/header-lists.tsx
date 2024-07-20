export default function HeaderLists() {
	return (
		<ul
			className="flex items-center justify-around cursor-pointer h-[3rem] font-bold tracking-wide mx-auto w-[420px] lg:w-[31rem] text-black/70
			 gap-x-4 lg:text-white lg:gap-x-14"
		>
			<li className="hover:border-2 lg:w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px]">
				<a href="#portfolio">КЕЙСЫ</a>
			</li>
			<li className="hover:border-2 lg:w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px]">
				<a href="#reviews">ОТЗЫВЫ</a>
			</li>
			<li className="hover:border-2 lg:w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px]">
				<a href="#contact">КОНТАКТЫ</a>
			</li>
		</ul>
	);
}
