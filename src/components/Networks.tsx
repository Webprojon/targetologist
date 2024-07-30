import { useState } from "react";
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Networks() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className="relative z-[800]">
			<div
				className={`fixed right-[1.3rem] bottom-[6rem] flex flex-col gap-y-3 transition-transform duration-300 lg:right-[4.5rem] lg:bottom-[8rem] 
					 ${isClicked ? "translate-y-0" : "translate-y-16 opacity-0"}`}
			>
				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-sky-900">
					<a href="tel:+998-93-169-34-54">
						<FaPhoneAlt className="size-6 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-purple-500">
					<a href="https://www.viber.com/en/" target="blank">
						<MdOutlinePhoneInTalk className="size-7 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-green-500">
					<a
						href="https://www.instagram.com/latifov_izzat?igsh=MTh6d3I3M2V1cnFmYg=="
						target="blank"
					>
						<FaWhatsapp className="size-7 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-blue-500">
					<a href="https://t.me/izzatbek_digital" target="blank">
						<FaTelegramPlane className="size-6 text-white" />
					</a>
				</div>
			</div>

			<div
				onClick={() => setIsClicked(!isClicked)}
				className="w-[4rem] h-[4rem] flex justify-center items-center bg-white cursor-pointer fixed right-3 bottom-3 rounded-full border-2 lg:right-[4rem] lg:bottom-12
			 border-blue-600 animate__animated animate__pulse animate__infinite"
			>
				{isClicked ? (
					<IoMdClose className="size-7 text-black/90" />
				) : (
					<img
						alt="networks"
						className="rounded-full object-cover"
						src="https://vakulenko.online/images/tild3530-3161-4266-a532-616237353739__group_3.png"
					/>
				)}
			</div>
		</div>
	);
}
