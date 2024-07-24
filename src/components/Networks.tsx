import { useState } from "react";
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Networks() {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<div className="relative">
			<div
				className={`fixed right-[1.3rem] bottom-[6rem] lg:right-[4.5rem] lg:bottom-[8rem] flex flex-col gap-y-3
					 ${isClicked ? "block" : "hidden"}`}
			>
				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-sky-900">
					<a href="tel: +998 99 999 77 77">
						<FaPhoneAlt className="size-6 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-purple-500">
					<a href="https://www.viber.com/en/" target="blank">
						<MdOutlinePhoneInTalk className="size-7 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-green-500">
					<a href="https://web.whatsapp.com/" target="blank">
						<FaWhatsapp className="size-7 text-white" />
					</a>
				</div>

				<div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] rounded-full bg-blue-500">
					<a href="https://web.telegram.org/" target="blank">
						<FaTelegramPlane className="size-6 text-white" />
					</a>
				</div>
			</div>

			<div
				onClick={() => setIsClicked(!isClicked)}
				className="w-[4rem] h-[4rem] flex justify-center items-center bg-white cursor-pointer fixed right-3 bottom-3 lg:right-[4rem] lg:bottom-12 rounded-full border-2
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
