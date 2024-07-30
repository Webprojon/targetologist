import { useEffect } from "react";
import { useGlobalContext } from "../context/global-context";
import { useTranslation } from "react-i18next";

export default function Modal() {
	const { isModal, setIsModal, userName } = useGlobalContext();
	const { t } = useTranslation();

	useEffect(() => {
		if (isModal) {
			document.body.classList.add("no-scroll");
		}
	}, [isModal]);

	const handleChange = () => {
		setIsModal(!isModal);
		document.body.classList.remove("no-scroll");
	};
	return (
		<div
			onClick={handleChange}
			className="fixed top-0 left-0 h-full w-full bg-black/60 backdrop-blur-[3px] z-50"
		>
			<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[95%] rounded-xl bg-slate-200 z-50 md:w-[620px]">
				<div className="text-slate-800 px-4 py-6 md:text-center md:py-14">
					<h2 className="text-[20px] font-bold md:text-[40px]">
						{t("modal-h2") + ` ${userName} !`}
					</h2>
					<p className="font-semibold text-[17px] pt-2 md:text-[24px] md:pt-4">
						{t("modal-p")} <br /> {t("modal-p-br")}
					</p>
				</div>
			</div>
		</div>
	);
}
