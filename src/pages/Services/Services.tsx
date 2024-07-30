import branding from "../../assets/Images/Services/branding.png";
import cmm from "../../assets/Images/Services/cmm.png";
import landing from "../../assets/Images/Services/landing.png";
import targeting from "../../assets/Images/Services/targeting.png";
import designer from "../../assets/Images/Services/designer.png";
import copywriter from "../../assets/Images/Services/copywriter.png";
import { useTranslation } from "react-i18next";

export default function Services() {
	const { t } = useTranslation();

	//Card Items
	const servicesData = [
		{
			imgSrc: branding,
			title: t("service-card-1.title"),
			description: t("service-card-1.description"),
		},
		{
			imgSrc: landing,
			title: t("service-card-2.title"),
			description: t("service-card-2.description"),
		},
		{
			imgSrc: designer,
			title: t("service-card-3.title"),
			description: t("service-card-3.description"),
		},
		{
			imgSrc: cmm,
			title: t("service-card-4.title"),
			description: t("service-card-4.description"),
		},
		{
			imgSrc: targeting,
			title: t("service-card-5.title"),
			description: t("service-card-5.description"),
		},
		{
			imgSrc: copywriter,
			title: t("service-card-6.title"),
			description: t("service-card-6.description"),
		},
	];

	return (
		<section className="my-16 mx-auto md:w-[930px] lg:w-[1150px]">
			<div className="md:flex justify-between items-center">
				<div className="text-center mx-auto xs:max-w-[500px] sm:max-w-[580px] md:text-left md:w-[520px]">
					<h2 className="font-bold text-[27px] md:text-[37px] lg:text-[44px] lg:leading-[3.8rem]">
						<span className="border-b-[3px] border-blue-500">
							{t("service-h2-span")}
						</span>{" "}
						{t("service-h2")}
					</h2>
					<p className="font-medium text-black/80 mt-4 md:text-[18px] md:leading-[1.9rem]">
						{t("service-p")}
					</p>
				</div>

				<div className="flex justify-center flex-col gap-y-12 mt-10 xs:flex-row sm:gap-x-12 md:mt-0 md:gap-x-10">
					<div className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-10 md:mt-10">
						{servicesData.slice(0, 3).map((service, index) => (
							<div
								key={index}
								className="service-shadow bg-custom-gradiant border-t-[5px] border-blue-500 rounded-[15px] mx-auto w-[300px] h-[37vh] py-6 px-5 xs:w-[230px]"
							>
								<img alt="icon" src={service.imgSrc} className="w-12" />
								<h2 className="font-bold mt-3 mb-4 text-[21px]">
									{service.title}
								</h2>
								<p className="font-semibold text-black/90 leading-[1.4rem]">
									{service.description}
								</p>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-10">
						{servicesData.slice(3, 6).map((service, index) => (
							<div
								key={index}
								className="service-shadow bg-custom-gradiant border-t-[5px] border-blue-500 rounded-[15px] mx-auto w-[300px] h-[37vh] py-6 px-5 xs:w-[230px]"
							>
								<img alt="icon" src={service.imgSrc} className="w-12" />
								<h2 className="font-bold mt-3 mb-4 text-[21px]">
									{service.title}
								</h2>
								<p className="font-semibold text-black/90 leading-[1.4rem]">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
