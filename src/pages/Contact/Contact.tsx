import { useTranslation } from "react-i18next";
import GlobalForm from "../../components/Form";

export default function Contact() {
	const { t } = useTranslation();
	return (
		<section
			id="contact"
			className="scroll-mt-20 home-bg-img md:scroll-mt-0 lg:h-[89vh]"
		>
			<div className="mx-auto max-w-[390px] pt-[2rem] py-10 xs:max-w-[490px] sm:pt-[3rem] md:max-w-[930px] lg:pt-[6.6rem] lg:max-w-[1150px]">
				<div className="gap-x-14 md:flex">
					<div className="text-center md:w-[1050px] md:text-left lg:text-left lg:mt-6">
						<h1 className="text-white text-[30px] leading-8 font-bold tracking-wide md:mt-10 md:text-[50px] md:leading-[4.4rem] md:block lg:text-[54px]">
							{t("contact-h2")}{" "}
							<span className="font-bold border-blue-500 md:border-b-[3px]">
								{t("contact-h2-span")}
							</span>
							<br />
							{t("contact-h2-br")}
						</h1>

						<div className="m-5 border-b-[3px] border-blue-500 md:hidden"></div>

						<p className="hidden font-medium text-white mt-5 xs:text-lg md:block md:text-[20px] md:leading-9 md:tracking-wide md:mt-10">
							{t("contact-p")} <b>{t("contact-p-bold")}</b>
						</p>
					</div>

					<div className="relative-container lg:w-[750px]">
						<div className="hidden border-ping md:block"></div>
						<div className="flex flex-col gap-y-4 text-center border-blue-600 w-full h-full md:bg-black/70 md:border-2 md:gap-y-6 md:p-[2rem] lg:p-[3.5rem]">
							<h2 className="hidden text-white text-[22px] font-bold xs:text-[28px] md:block lg:mt-0 lg:text-[25px]">
								{t("contact-form-h2")}
							</h2>
							<p className="text-white font-medium xs:text-lg">
								{t("contact-form-p")}
							</p>

							<GlobalForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
