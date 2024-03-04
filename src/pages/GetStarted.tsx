import Image from "next/image";
import React from "react";
import Backgron from "../img/background.png";

const GetStarted = () => {
	return (
		<div className="mt-28 ">
			<Image
				src={Backgron}
				alt="ini fotonya"
				className="w-full brightness-50 mobile:aspect-video mobile:object-cover"
			/>
			<div className="relative  -mt-64  flex flex-col items-center mobile:-mt-44 ">
				<h1 className="font-bold text-center text-white text-[40px] mobile:text-[23px] ">
					So? What Are You Waiting For
				</h1>
				<p className="text-center text-white/50  mobile:text-[15px] ">
					Its time to build your career, study in a relaxed and purposeful
					manner
				</p>
				<div className="flex items-center gap-x-12 ">
					<button className="bg-unguJanda px-8 py-3 border-none rounded-md text-white mt-5 font-semibold mobile:px-4">
						Get Started
					</button>
					<button className="px-8 py-3 border-none rounded-md text-white mt-5 font-semibold mobile:px-4">
						Contact Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
