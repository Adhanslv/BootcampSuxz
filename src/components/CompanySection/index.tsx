import React from "react";
import Github from "../../img/Github.png";
import Linkedin from "../../img/Linkedin.png";
import Medium from "../../img/Medium.png";
import Microsoft from "../../img/Microsoft.png";
import Paypal from "../../img/Group 18.png";
import Reddit from "../../img/Reddit.png";
import Redis from "../../img/Group.png";
import Image from "next/image";
const CompanySection = () => {
	return (
		<div className="px-[10vw]">
			<div>
				<h1 className="text-center text-[44px] font-bold mb-4 mobile:text-[34px] ">
					Companies That Recruites Our Graduates
				</h1>
				<p className="text-center text-[20px] ">
					Our graduates have worked in more than 400 companies around the World
				</p>
				<div className="flex flex-wrap  items-center  justify-center gap-x-12 gap-y-12 mt-12">
					<Image src={Github} alt="ini fotonya" />
					<Image src={Linkedin} alt="ini fotonya" />
					<Image src={Medium} alt="ini fotonya" />
					<Image src={Microsoft} alt="ini fotonya" />
					<Image src={Paypal} alt="ini fotonya" />
					<Image src={Reddit} alt="ini fotonya" />
					<Image src={Redis} alt="ini fotonya" />
				</div>
			</div>
		</div>
	);
};

export default CompanySection;
