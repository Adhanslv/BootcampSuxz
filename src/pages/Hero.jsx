import React from "react";
import ContentImage from "../img/contentImage.png";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div className="hero-section grid grid-cols-10 items-center px-[10vw] mt-40 mobile:mt-20">
			<div className="col-span-4 tablet:col-span-6 tablet:mt-72  mobile:col-span-12 mobile:mt-80  ">
				<h3 className="text-unguJanda text-xl  mb-2 font-semibold">
					SUXZ MAKE IT EASY{" "}
				</h3>
				<h1 className="text-[64px] leading-tight font-bold mb-4 mobile:text-[39px]">
					Find Your Way Of Success{" "}
				</h1>
				<p className="text-[21px] mb-5 mobile:text-[14px]">
					We help you to increase self-confidence and train yourself in a
					direction, and make you more creative in developing a work
				</p>
				<div className="flex gap-x-4  ">
					<button className="px-6 py-3 rounded-md bg-unguJanda text-white gap-x-4">
						Get Started
					</button>
					<button className="px-6 py-3 rounded-md bg-[#A2B3BF]/20 text-black/55">
						Our Service
					</button>
				</div>
			</div>
			<div className="col-span-6 -mb-60 tablet:order-first tablet:col-span-9 tablet:mt-20   mobile:order-first mobile:col-span-9 mobile:mt-12 ">
				<Image src={ContentImage} alt="ini fotonya" className=" -mt-10" />
			</div>
		</div>
	);
};

export default HeroSection;
