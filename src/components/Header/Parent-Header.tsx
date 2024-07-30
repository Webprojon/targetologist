import HeaderLangs from "./header-langs";
import HeaderLists from "./header-lists";
import HeaderLogo from "./header-logo";
import ResponsiveMenu from "./header-top-menu";

export default function Header() {
	return (
		<header className="absolute left-0 right-0 mx-auto bg-white md:bg-transparent lg:mt-3 lg:w-[1150px]">
			<nav className="flex justify-between items-center py-1 md:px-6 lg:p-0">
				<HeaderLogo />

				<HeaderLists />

				<div className="hidden md:block">
					<HeaderLangs />
				</div>

				<ResponsiveMenu />
			</nav>
		</header>
	);
}
