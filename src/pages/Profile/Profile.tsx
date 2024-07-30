import { useTranslation } from "react-i18next";
import ProfileForm from "./Profile-Form";
import ProfileImage from "./Profile-image";

export default function Profile() {
	const { t } = useTranslation();
	return (
		<section className="relative bg-black/95 mt-[5rem] mb-10 pt-10 mx-auto md:mt-[9rem] lg:py-14 lg:max-w-[1540px]">
			<div className="flex flex-col-reverse mx-auto md:flex-row lg:relative lg:w-[1150px]">
				<div className="text-center px-4 text-white mx-auto max-w-[320px] xs:max-w-[460px] sm:max-w-[625px] md:text-left md:mx-0 lg:w-[540px]">
					<h2 className="font-bold text-[27px] mt-8 tracking-wider leading-8 xs:text-[32px] sm:text-[32px] md:mt-0 md:text-[32px] lg:text-[36px] lg:leading-[3rem]">
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
