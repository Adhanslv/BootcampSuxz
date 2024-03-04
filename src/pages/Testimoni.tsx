import Image from "next/image";
import React from "react";
import Avatar1 from "../img/satu.png";
import Avatar2 from "../img/dua.png";
import Avatar3 from "../img/tiga.png";
import Avatar4 from "../img/empat.png";
import CardTestimoni from "@/components/CardLeaning/CardTestimoni";
const Testimoni = () => {
	return (
		<div className="px-[10vw] mt-24">
			<div className="mb-12">
				<p className="text-center text-unguJanda text-[20px] font-semibold">
					TESTIMONIAL
				</p>
				<h1 className="text-center text-4xl font-bold">Our Alumni Say</h1>
				<p className="text-center">
					These are the words of people who have taken our class
				</p>
			</div>
			{/* Card Section */}
			<div className="flex  items-center justify-center mb-14 mt-24 gap-x-4 tablet:flex-wrap tablet:gap-y-12 mobile:flex-wrap mobile:gap-y-12">
				<CardTestimoni>
					<Image
						src={Avatar1}
						width={85}
						alt="fotonya disini"
						className=" mx-20 -mt-14 mobile:mx-20 mobile:w-[103px] "
					/>
					<h1 className="text-center text-xl font-bold">Jason Todd</h1>
					<p className="text-center text-black/40 mb-4">Enterpreneur</p>
					<p className="text-center text-black">
						“The mentor is cool, how to convey each material is also detailed
						and easy to understand..”
					</p>
				</CardTestimoni>
				<CardTestimoni>
					<Image
						src={Avatar2}
						width={85}
						alt="fotonya disini"
						className=" mx-20 -mt-14 mobile:mx-20 mobile:w-[103px]"
					/>
					<h1 className="text-center text-xl font-bold">Cassandra K</h1>
					<p className="text-center text-black/40 mb-4">Web Developer</p>
					<p className="text-center text-black">
						“The mentor is cool, how to convey each material is also detailed
						and easy to understand..”
					</p>
				</CardTestimoni>
				<CardTestimoni>
					<Image
						src={Avatar3}
						width={85}
						alt="fotonya disini"
						className=" mx-20 -mt-14 mobile:mx-20 mobile:w-[103px]"
					/>
					<h1 className="text-center text-xl font-bold">Peter Parker</h1>
					<p className="text-center text-black/40 mb-4">PHP Enthusiat</p>
					<p className="text-center text-black">
						“The mentor is cool, how to convey each material is also detailed
						and easy to understand..”
					</p>
				</CardTestimoni>
				<CardTestimoni>
					<Image
						src={Avatar4}
						width={85}
						alt="fotonya disini"
						className=" mx-20 -mt-14 mobile:mx-20 mobile:w-[103px]"
					/>
					<h1 className="text-center text-xl font-bold">Jean Gray</h1>
					<p className="text-center text-black/40 mb-4">Designer</p>
					<p className="text-center text-black">
						“The mentor is cool, how to convey each material is also detailed
						and easy to understand..”
					</p>
				</CardTestimoni>
			</div>
		</div>
	);
};

export default Testimoni;
