import Image from "next/image";
import React from "react";
import Aboutimg from "../../img/about.png";
import { FaCheck } from "react-icons/fa";

const About = () => {
	return (
		<div className="About-Us p-[10vw] grid grid-cols-10 mobile:block tablet:block">
			<div className="col-span-6">
				<Image src={Aboutimg} alt="ini fotonya" className="object-center" />
			</div>
			<div className="col-span-12  col-start-7">
				<h2 className="text-xl text-unguJanda font-semibold">ABOUT US</h2>
				<h1 className="font-bold text-[45px] mobile:text-[30px] mb-3">
					We Help Improve Your Work Experience
				</h1>
				<p className="text-black/80 text-[18px]">
					We help you to increase self-confidence and train yourself in a
					direction.
				</p>
				<div className="mt-12 flex flex-col">
					<div className="flex items-center gap-x-12 mb-5 mobile:gap-x-4  ">
						<FaCheck className="text-[#00ADB5]" />
						<p className="text-[18px]">
							Study and produce creation to get a job
						</p>
					</div>
					<div className="flex items-center gap-x-12 mb-5 mobile:gap-x-4 ">
						<FaCheck className="text-[#00ADB5]" />
						<p className="text-[18px]">
							Up to date material and created by expert creators
						</p>
					</div>
					<div className="flex items-center gap-x-12 mb-5 mobile:gap-x-4 ">
						<FaCheck className="text-[#00ADB5]" />
						<p className="text-[18px]">
							Complete classes and projects and get a certificate from us
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
