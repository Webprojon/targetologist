import { useState } from "react";
import InputRange from "./Input-Range";
import axios from "axios";
import { useGlobalContext } from "../../context/global-context";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function ProfileForm() {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [zoneOfAdvertise, setZoneOfAdvertise] = useState("");
	const [averageBill, setAverageBill] = useState("");
	const [loading, setLoading] = useState(false);
	const { rangeValues, setRangeValues } = useGlobalContext();

	const SendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		event.preventDefault();
		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		//const chat_id = "-1002155393636"; // for telegram channal
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `Mijozning ma'lumotlari: 
		\n Ismi: ${nameValue} \n Tel No'meri: ${phoneValue} \n Reklama Hududi: ${zoneOfAdvertise} \n O'rtacha Hisob: ${averageBill} \n Klient Soni: ${rangeValues}`;

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
				setZoneOfAdvertise("");
				setAverageBill("");
				setRangeValues([120]);
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<form
			onSubmit={SendMessage}
			className="flex flex-col gap-y-4 mt-6 xs:w-[390px] xs:mx-auto sm:w-[390px] sm:mx-auto md:mx-0 lg:w-[430px] lg:mt-10"
		>
			<input
				type="text"
				placeholder="Имя"
				required
				value={nameValue}
				onChange={(e) => setNameValue(e.target.value)}
				autoComplete="off"
				className="py-3 px-5 rounded-[25px] text-black/60 placeholder:text-black/60 font-medium outline-none"
			/>
			<PhoneInput
				type="tel"
				required
				international
				defaultCountry="UZ"
				value={phoneValue}
				onChange={(value) => setPhoneValue(value)}
				placeholder="(99) 999-99-99"
				className="rounded-[28px] bg-white py-[1rem] lg:py-[.9rem] px-5 font-bold outline-none text-black/60 placeholder:text-black/60"
			/>
			<input
				type="text"
				required
				value={zoneOfAdvertise}
				onChange={(e) => setZoneOfAdvertise(e.target.value)}
				autoComplete="off"
				placeholder="Регион продвижения"
				className="py-3 px-5 rounded-[28px] text-black/60 placeholder:text-black/60 font-medium outline-none"
			/>
			<input
				type="number"
				autoComplete="off"
				required
				value={averageBill}
				onChange={(e) => setAverageBill(e.target.value)}
				placeholder="Средний чек"
				className="py-3 px-5 rounded-[28px] text-black/60 placeholder:text-black/60 font-medium outline-none"
			/>
			<p className="font-medium tracking-wide xs:text-left sm:text-left md:text-left">
				Сколько клиентов необходимо до цели?
			</p>

			<InputRange />

			<div className="flex justify-between w-full">
				<span>30</span>
				<span>500</span>
			</div>

			<button className="mb-10 lg:mt-2 text-white font-bold tracking-wider rounded-[28px] bg-blue-500 py-3 px-4 hover:bg-blue-600 transition-all">
				{loading ? "Oтправлять" : "УЗНАТЬ РЕЗУЛЬТАТ"}
			</button>
		</form>
	);
}
