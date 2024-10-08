import { IoChevronDownOutline } from "react-icons/io5";
import GlobalForm from "../../components/Form";
import { useTranslation } from "react-i18next";
import HeaderLangs from "../../components/Header/header-langs";
import Modal from "../../components/Modal";
import { useGlobalContext } from "../../context/global-context";

export default function Home() {
	const { t } = useTranslation();
	const { isModal } = useGlobalContext();

	return (
		<main className="home-bg-img sm:hidden md:block lg:h-[89vh]">
			{isModal ? <Modal /> : ""}
			<section className="mx-auto max-w-[390px] pt-[5.5rem] py-10 xs:max-w-[490px] md:max-w-[930px] lg:pt-[6.6rem] lg:max-w-[1150px]">
				<div className="gap-x-14 md:flex">
					<div className="text-center md:hidden">
						<HeaderLangs />
					</div>

					<div className="text-center md:w-[1050px] md:text-left lg:text-left lg:mt-6">
						<div className="flex justify-center items-center mt-10 gap-x-4 xs:mt-0 md:hidden">
							<img
								alt="logo"
								className="w-[100px] h-[70px]"
								src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
							/>
							<h1 className="text-white text-[20px] font-semibold tracking-wide xs:text-[28px]">
								<span className="text-gray-200 font-medium border-b-2 border-blue-600">
									Иззатбек Латифов <br />
								</span>
								Таргетолог
							</h1>
						</div>

						<h1 className="hidden text-white font-bold tracking-wide md:block md:leading-[4.4rem] md:text-[50px] lg:text-[62px] lg:leading-[4.7rem]">
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
						<div className="flex flex-col gap-y-4 text-center border-blue-600 w-full h-full md:bg-black/70 md:border-2 md:gap-y-6 md:p-[2rem] lg:p-[3.5rem]">
							<h2 className="text-white text-[22px] font-bold xs:text-[28px] lg:mt-0 lg:text-[25px]">
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
