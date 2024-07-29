import axios from "axios";
import { useState } from "react";
import {
	FaFacebook,
	FaInstagram,
	FaTelegramPlane,
	FaWhatsapp,
} from "react-icons/fa";
import HeaderLangs from "./Header/header-langs";

export default function Footer() {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [textAreaValue, setTextAreaValue] = useState("");
	const [loading, setLoading] = useState(false);

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
		<section
			style={{
				backgroundImage: `url("https://vakulenko.online/images/tild3339-3935-4265-b533-336266363036__photo.png")`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			className="text-white pb-4"
		>
			<div className="flex flex-col-reverse md:flex-row md:justify-around lg:w-[1150px] mx-auto">
				<div className="mt-8 md:mt-14 flex flex-col items-center">
					<h2 className="font-bold text-center text-[28px] xs:text-[32px] md:text-[40px] mt-10 mb-8 sm:mb-10">
						Мои контакты
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

					<div className="flex flex-col gap-y-2 items-center text-[20px] xs:text-[25px] tracking-wider mt-8 sm:mt-12">
						<a href="mailto:example@mail.ru">latifovizzatbek@mail.ru</a>
						<a href="tel+998-93-169-34-54">+998 93 169 34 54</a>
					</div>
				</div>

				<div className="mt-8 md:mt-14">
					<h2 className="font-bold text-center text-[28px] xs:text-[32px] md:text-[40px] mb-10">
						Есть вопросы? - Пишите!
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
							placeholder="Имя"
							className="rounded-[28px] bg-zinc-800 py-[1rem] lg:py-[.9rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
						/>

						<input
							type="tel"
							required
							autoComplete="off"
							value={phoneValue}
							onChange={(e) => setPhoneValue(e.target.value)}
							placeholder="(99) 999-99-99"
							className="rounded-[28px] bg-zinc-800 py-[1rem] lg:py-[.9rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
						/>

						<textarea
							rows={3}
							required
							autoComplete="off"
							value={textAreaValue}
							onChange={(e) => setTextAreaValue(e.target.value)}
							placeholder="Вопрос"
							className="rounded-[28px] bg-zinc-800 py-[1rem] lg:py-[.9rem] px-5 font-bold outline-none text-gray-300 placeholder:text-gray-300"
							style={{ resize: "none" }}
						></textarea>

						<button className="text-white font-bold tracking-wide rounded-[28px] bg-blue-500 py-[1rem] lg:py-[.9rem] px-5 hover:bg-blue-600 transition-all">
							{loading ? "Oтправлять" : "ЗАДАТЬ ВОПРОС"}
						</button>
					</form>
				</div>
			</div>

			<div className="mx-auto mt-10 sm:mt-20 sm:w-[400px] text-center tracking-wide">
				<HeaderLangs />
				{/*<div className="flex justify-center gap-x-10 text-[20px] font-bold">
					<span>UZ</span>
					<span className="text-blue-500">RU</span>
				</div>*/}
				<p className="font-semibold mt-5 text-[17px] xs:text-[20px]">
					@ 2015-2022. Все права защищены Политика Конфиденциальности
				</p>
			</div>
		</section>
	);
}
