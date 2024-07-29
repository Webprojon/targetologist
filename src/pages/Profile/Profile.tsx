import { useTranslation } from "react-i18next";
import ProfileForm from "./Profile-Form";
import ProfileImage from "./Profile-image";

export default function Profile() {
	const { t } = useTranslation();
	return (
		<section className="relative bg-black/95 mt-[5rem] md:mt-[9rem] mb-10 pt-10 lg:py-14 lg:max-w-[1540px] mx-auto">
			<div className="lg:relative flex flex-col mx-auto md:flex-row lg:w-[1150px]">
				<div className="text-center md:text-left px-4 text-white mx-auto md:mx-0 max-w-[320px] xs:max-w-[460px] sm:max-w-[625px] lg:w-[540px]">
					<h2 className="font-bold text-[27px] xs:text-[32px] sm:text-[32px] md:text-[32px] lg:text-[36px] tracking-wider leading-8 lg:leading-[3rem]">
						{t("profile-h2")}{" "}
						<span className="border-b-[3px] border-blue-500">
							{t("profile-h2-span")}
						</span>
					</h2>
					<p className="font-medium tracking-wide mt-6 xs:text-[17px] sm:text-[17px] md:text-[17px] lg:text-[18px] lg:mt-10">
						{t("profile-p")}
					</p>

					<ProfileForm />
				</div>

				<ProfileImage />
			</div>
		</section>
	);
}
