import React from "react";
import CardLearning from "./Index";
import Learn1 from "../../img/learn1.png";
import Learn2 from "../../img/learn2.png";
import Learn3 from "../../img/learn3.png";
import Learn4 from "../../img/learn4.png";
import Image from "next/image";
import SeeClass from "../ButtonLearning";
import Link from "next/link";

const LearningSection = () => {
	return (
		<div className="Card-Learning px-[10vw] pt-72 ">
			<div className="grid grid-cols-4 mobile:-mt-48 ">
				<h3 className="text-unguJanda col-span-12 mb-2 text-[22px] font-semibold ">
					LEARNINGS
				</h3>
				<h1 className=" col-end-3 col-span-12 text-[44px] font-semibold leading-tight mb-4 mobile:block mobile:col-span-12 mobile:text-[27px]">
					Online Learning Platform International Curriculum
				</h1>
				<p className="col-end-2 col-span-12 text-[16px] mobile:block mobile:col-span-12">
					Study and understand the material class is more relaxed without time
					limit.
				</p>
			</div>
			<div className="grid grid-cols-4 gap-x-4 mt-16 mobile:flex-col mobile:gap-y-4 mobile:w-full tablet:grid-cols-2 tablet:gap-y-4 mobile:flex  ">
				<CardLearning>
					<Image src={Learn1} alt="fotonya disini" className="mb-4 w-24" />
					<Link href="/Learning" className="hover:text-unguJanda/50">
						<h1 className="font-bold text-xl mb-3">Starter</h1>
					</Link>
					<p className="mb-4 text-[14px]">
						Free class access for that start learning code and design
					</p>
					<Link href="/Learning">
						<SeeClass>See Class</SeeClass>
					</Link>
				</CardLearning>
				<CardLearning>
					<Image src={Learn2} alt="fotonya disini" className="mb-4 w-24" />
					<h1 className="font-bold text-xl mb-3">Premium</h1>
					<p className="mb-4 text-[14px]">
						Advanced material from the Starter & learn to build projects
					</p>
					<Link href="">
						<SeeClass>See Clas</SeeClass>
					</Link>
				</CardLearning>
				<CardLearning>
					<Image src={Learn3} alt="fotonya disini" className="mb-4 w-24" />
					<h1 className="font-bold text-xl mb-3">Superstar</h1>
					<p className="mb-4 text-[14px]">
						Materials for experts who have completed the premium package
					</p>
					<SeeClass>See Clas</SeeClass>
				</CardLearning>
				<CardLearning>
					<Image src={Learn4} alt="fotonya disini" className="mb-4 w-24" />
					<h1 className="font-bold text-xl mb-3">Bootcamp</h1>
					<p className="mb-4 text-[14px]">
						Informatics science training program with the latest material
					</p>
					<SeeClass>See Clas</SeeClass>
				</CardLearning>
			</div>
		</div>
	);
};

export default LearningSection;
