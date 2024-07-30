import { useTranslation } from "react-i18next";

export default function HeaderLists() {
	const { t } = useTranslation();

	return (
		<ul
			className="flex items-center justify-around cursor-pointer h-[3rem] font-bold tracking-wide mx-auto w-[420px] lg:w-[31rem] text-black/70
			 gap-x-4 sm:hidden md:flex md:text-white lg:gap-x-14"
		>
			<li className="lg:w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px] md:hover:border-2">
				<a href="#portfolio">{t("keys")}</a>
			</li>
			<li className="lg:w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px] md:hover:border-2">
				<a href="#reviews">{t("opinion")}</a>
			</li>
			<li className="lg:w-[9rem] text-center border-sky-600 py-[.3rem] rounded-[20px] md:hover:border-2">
				<a href="#contact">{t("contact")}</a>
			</li>
		</ul>
	);
}
