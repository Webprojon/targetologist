import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function GlobalForm() {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();

	const SendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		event.preventDefault();
		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		//const chat_id = "-1002155393636"; // for telegram channal
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `Mijozning Ismi:  ${nameValue} \nMizojning Tel No'meri: ${phoneValue}`;

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
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<form
			onSubmit={SendMessage}
			className="px-4 md:px-2 mt-4 w-full flex flex-col gap-y-5 xs:px-12"
		>
			<input
				type="text"
				required
				value={nameValue}
				onChange={(e) => setNameValue(e.target.value)}
				placeholder={t("home-form-input")}
				className="rounded-[28px] bg-zinc-700 py-[1rem] lg:py-[.9rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
			/>

			<div className="rounded-[28px] bg-zinc-700 py-[.6rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300">
				<PhoneInput
					country="uz"
					value={phoneValue}
					onChange={(value) => setPhoneValue(value ?? "")}
					placeholder="(99) 999-99-99"
					inputStyle={{
						borderRadius: "28px",
						backgroundColor: "transparent",
						fontWeight: "bold",
						border: "none",
						outline: "none",
						width: "100%",
					}}
					buttonStyle={{
						border: "none",
						background: "transparent",
					}}
				/>
			</div>

			<button className="text-white font-bold tracking-wide rounded-[28px] bg-blue-500 py-[1rem] lg:py-[.9rem] px-5 hover:bg-blue-600 transition-all">
				{loading ? t("home-form-sending") : t("home-form-btn")}
			</button>
		</form>
	);
}
