import { useState } from "react";
import InputRange from "./Input-Range";
import axios from "axios";
import { useGlobalContext } from "../../context/global-context";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useTranslation } from "react-i18next";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setRangeValues } from "../../redux/global-slices";

type E164Number = string;

export default function ProfileForm() {
	// Redux
	const dispatch: AppDispatch = useDispatch();
	const rangeValues = useSelector((state: RootState) => state.user.rangeValues);

	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [zoneOfAdvertise, setZoneOfAdvertise] = useState("");
	const [averageBill, setAverageBill] = useState("");
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();
	const { isModal, setIsModal, setUserName } = useGlobalContext();

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
					setIsModal(!isModal);
					setUserName(nameValue);
				}, 2000);

				setTimeout(() => {
					setNameValue("");
					setPhoneValue("");
					setZoneOfAdvertise("");
					setAverageBill("");
					dispatch(setRangeValues([120]));
				}, 1000);
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
				placeholder={t("profile-form-name-input")}
				required
				value={nameValue}
				onChange={(e) => setNameValue(e.target.value)}
				autoComplete="off"
				className="py-3 px-5 rounded-[25px] text-black/60 placeholder:text-black/60 font-medium outline-none"
			/>
			<div className="rounded-[28px] bg-white py-[1rem] px-5 font-bold outline-none text-black/60 placeholder:text-black/60 lg:py-[.8rem]">
				<PhoneInput
					type="tel"
					required
					international
					defaultCountry="UZ"
					value={phoneValue}
					onChange={(value?: E164Number) => setPhoneValue(value || "")}
					placeholder="(99) 999-99-99"
				/>
			</div>

			<input
				type="text"
				required
				value={zoneOfAdvertise}
				onChange={(e) => setZoneOfAdvertise(e.target.value)}
				autoComplete="off"
				placeholder={t("profile-form-city-input")}
				className="py-3 px-5 rounded-[28px] text-black/60 placeholder:text-black/60 font-medium outline-none"
			/>
			<input
				type="number"
				autoComplete="off"
				required
				value={averageBill}
				onChange={(e) => setAverageBill(e.target.value)}
				placeholder={t("profile-form-average-input")}
				className="py-3 px-5 rounded-[28px] text-black/60 placeholder:text-black/60 font-medium outline-none"
			/>
			<p className="font-medium tracking-wide xs:text-left sm:text-left md:text-left">
				{t("profile-form-p")}
			</p>

			<InputRange />

			<div className="flex justify-between w-full">
				<span>30</span>
				<span>500</span>
			</div>

			<button className="mb-10 text-white font-bold tracking-wider rounded-[28px] bg-blue-500 py-3 px-4 hover:bg-blue-600 transition-all lg:mt-2">
				{loading ? t("profile-form-btn-send") : t("profile-form-btn")}
			</button>
		</form>
	);
}
