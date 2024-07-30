import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function HeaderLangs() {
	const [selectedLanguage, setSelectedLanguage] = useState("");
	const { i18n } = useTranslation();

	useEffect(() => {
		const initialLanguage =
			typeof window !== "undefined"
				? localStorage.getItem("i18nextLng") || "uz"
				: "uz";
		setSelectedLanguage(initialLanguage);
	}, []);

	const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
		const target = event.currentTarget as HTMLSpanElement;
		const value = target.innerText.toLowerCase();
		setSelectedLanguage(value);
		i18n.changeLanguage(value);
		localStorage.setItem("i18nextLng", value);
	};

	return (
		<div className="cursor-pointer font-bold text-white">
			<span
				onClick={handleClick}
				className={`border border-blue-600 py-[.4rem] px-3
					 ${selectedLanguage === "uz" ? "bg-blue-600" : ""}`}
			>
				UZ
			</span>

			<span
				onClick={handleClick}
				className={`border border-blue-600 py-[.4rem] px-3
					 ${selectedLanguage === "ru" ? "bg-blue-600" : ""}`}
			>
				RU
			</span>
		</div>
	);
}
