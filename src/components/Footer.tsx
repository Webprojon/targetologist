import axios from "axios";
import { useState } from "react";
import {
	FaFacebook,
	FaInstagram,
	FaTelegramPlane,
	FaWhatsapp,
} from "react-icons/fa";
import HeaderLangs from "./Header/header-langs";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [textAreaValue, setTextAreaValue] = useState("");
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();

	const SendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		event.preventDefault();
		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		//const chat_id = "-1002155393636"; // for telegram channal
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `Mijozning Ismi:  ${nameValue} \nMizojning Tel No'meri: ${phoneValue} \nMijozning Savoli: ${textAreaValue}`;

		axios({
			url: url,
			method: "POST",
			data: {
				chat_id: chat_id,
				text: messageContent,
			},
		})
			.then(() => {
				setTimeout(() => {
					//setIsModal(!isModal);
					//setUserName(nameValue);
				}, 1000);
				setNameValue("");
				setPhoneValue("");
				setTextAreaValue("");
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<section className="footer-bg-img text-white pb-4">
			<div className="flex flex-col-reverse mx-auto md:flex-row md:justify-around lg:w-[1150px]">
				<div className="mt-8 flex flex-col items-center md:mt-14">
					<h2 className="font-bold text-center text-[28px] mt-10 mb-8 xs:text-[32px] sm:mb-10 md:text-[36px] md:mt-0">
						{t("footer-first-h2")}
					</h2>
					<div className="flex gap-x-8">
						<a href="https://www.whatsapp.com/" target="blank">
							<FaWhatsapp className="size-8 xs:size-10" />
						</a>
						<a href="https://t.me/izzatbek_digital" target="blank">
							<FaTelegramPlane className="size-8 xs:size-10" />
						</a>
						<a
							href="https://www.instagram.com/latifov_izzat?igsh=MTh6d3I3M2V1cnFmYg=="
							target="blank"
						>
							<FaInstagram className="size-8 xs:size-10" />
						</a>
						<a href="https://www.facebook.com/" target="blank">
							<FaFacebook className="size-8 xs:size-10" />
						</a>
					</div>

					<div className="flex flex-col gap-y-2 items-center text-[20px] tracking-wider mt-8 xs:text-[25px] sm:mt-12">
						<a href="mailto:example@mail.ru">latifovizzatbek@mail.ru</a>
						<a href="tel+998-93-169-34-54">+998 93 169 34 54</a>
					</div>
				</div>

				<div className="mt-8 md:mt-14">
					<h2 className="font-bold text-center text-[28px] mb-10 xs:text-[32px] md:text-[36px]">
						{t("footer-second-h2")}
					</h2>
					<form
						onSubmit={SendMessage}
						className="flex flex-col gap-y-6 mx-auto w-[330px] xs:w-[350px]"
					>
						<input
							type="text"
							required
							autoComplete="off"
							value={nameValue}
							onChange={(e) => setNameValue(e.target.value)}
							placeholder={t("footer-form-name-input")}
							className="rounded-[28px] bg-zinc-800 py-[1rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300 lg:py-[.9rem]"
						/>

						<input
							type="tel"
							required
							autoComplete="off"
							value={phoneValue}
							onChange={(e) => setPhoneValue(e.target.value)}
							placeholder="(99) 999-99-99"
							className="rounded-[28px] bg-zinc-800 py-[1rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300 lg:py-[.9rem]"
						/>

						<textarea
							rows={3}
							required
							autoComplete="off"
							value={textAreaValue}
							onChange={(e) => setTextAreaValue(e.target.value)}
							placeholder={t("footer-form-question-input")}
							className="rounded-[28px] bg-zinc-800 py-[1rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300 lg:py-[.9rem]"
							style={{ resize: "none" }}
						></textarea>

						<button className="text-white font-bold tracking-wide rounded-[28px] bg-blue-500 py-[1rem] px-5 hover:bg-blue-600 transition-all lg:py-[.9rem]">
							{loading ? t("footer-btn-send") : t("footer-btn")}
						</button>
					</form>
				</div>
			</div>

			<div className="mx-auto mt-10 text-center tracking-wide sm:mt-20 sm:w-[400px]">
				<HeaderLangs />
				<p className="font-semibold mt-5 text-[17px] xs:text-[20px]">
					{t("footer-p")}
				</p>
			</div>
		</section>
	);
}
