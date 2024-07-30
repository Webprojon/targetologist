import profileImg from "../../assets/Images/Profile/photo_2024-07-28_09-15-44.jpg";

export default function ProfileImage() {
	return (
		<img
			alt="profile img"
			className="lg:absolute -top-[8rem] right-0 mx-auto h-[70vh] max-w-[320px] object-cover w-[100%] xs:max-w-[480px] sm:max-w-[550px] md:h-[100vh]
			 lg:w-[550px] lg:h-[110vh]"
			src={profileImg}
		/>
	);
}
