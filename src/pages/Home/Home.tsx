import { IoChevronDownOutline } from "react-icons/io5";
import GlobalForm from "../../components/Form";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
//import HeaderLangs from "../../components/Header/header-langs";

export default function Home() {
	const { t } = useTranslation();

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
		<main className="bg-image sm:hidden md:block lg:h-[89vh]">
			<section className="mx-auto max-w-[390px] xs:max-w-[490px] pt-[5.5rem] py-10 lg:pt-[6.6rem] md:max-w-[930px] lg:max-w-[1150px]">
				<div className="md:flex gap-x-14">
					{/*<div className="mt-3 text-center cursor-pointer font-bold text-white xs:hidden">
						<span className="border border-blue-500 py-[.5rem] px-5">UZ</span>
						<span className="border border-blue-500 py-[.5rem] px-5 bg-blue-500">
							RU
						</span>
					</div>*/}

					<div className="text-center cursor-pointer font-bold text-white sm:hidden">
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

					{/*<HeaderLangs />*/}

					<div className="md:w-[1050px] text-center md:text-left lg:text-left lg:mt-6">
						<div className="flex justify-center items-center mt-10 gap-x-4 xs:mt-0 md:hidden">
							<img
								alt="logo"
								className="w-[110px] h-[80px]"
								src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
							/>
							<h1 className="text-white text-[28px] font-semibold tracking-wide xs:text-[28px]">
								<span className="text-gray-200 font-medium border-b-2 border-blue-600">
									Иззатбек Латифов <br />
								</span>
								Таргетолог
							</h1>
						</div>

						<h1 className="hidden text-white md:text-[50px] lg:text-[62px] md:leading-[4.4rem] lg:leading-[4.7rem] font-bold tracking-wide md:block">
							<span className="font-bold border-b-2 border-blue-600">
								Таргетолог
							</span>
							<br />
							Иззатбек Латифов
						</h1>
						<h3 className="text-white tracking-wide font-bold text-[22px] mt-6 md:hidden">
							{t("home-h3")}
						</h3>
						<p className="font-medium text-white mt-5 xs:text-lg md:text-[20px] md:leading-9 md:tracking-wide md:mt-10">
							{t("home-p")}
						</p>
						<IoChevronDownOutline className="animate-bounce size-12 mx-auto mt-8 text-blue-600 md:hidden" />
					</div>

					<div className="relative-container lg:w-[750px]">
						<div className="hidden border-ping md:block"></div>
						<div className="flex flex-col gap-y-4 text-center md:gap-y-6 md:p-[2rem] lg:p-[3.5rem] md:bg-black/70 md:border-2 border-blue-600 w-full h-full">
							<h2 className="text-white text-[22px] xs:text-[28px] lg:mt-0 lg:text-[25px] font-bold">
								{t("home-form-h2")}
							</h2>
							<p className="font-medium text-white xs:text-lg">
								{t("home-form-p")}
							</p>

							<GlobalForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
