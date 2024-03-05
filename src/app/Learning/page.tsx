import React from "react";
import Link from "next/link";
import { IoArrowBackCircle, IoEyeSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import Cover from "../../img/PageStarter/sigmund-Im_cQ6hQo10-unsplash.jpg";
import Image from "next/image";

function LearningPage() {
	return (
		<div className="px-[25vw] mt-12 mobile:px-[10vw] min-h-[1250px]">
			<Link href="/" className="flex items-center gap-x-2 mb-7">
				<IoArrowBackCircle size={30} />
				<span className="hover:translate-x-2 transition duration-700 font-semibold ease-in-out text-[18px]">
					Back
				</span>
			</Link>
			<div>
				<h1 className="text-xl mb-6 ">
					<span className="font-bold">Starter</span> with free class access for
					that start learning code and design
				</h1>
				<div className="flex items-center justify-between mb-12  mobile:flex-wrap ">
					<h2>Published on September 20, 2023</h2>
					<div className="flex items-center gap-x-5 text-unguJanda mobile:flex-wrap">
						<p className="flex  items-center gap-2">
							<IoEyeSharp />
							120 views
						</p>
						<p className="flex  items-center gap-2">
							<FaRegClock /> 1 min read
						</p>
						<p className="flex  items-center gap-2">
							<MdOutlineComment /> 1 Comment
						</p>
					</div>
				</div>
				<div>
					<Image
						src={Cover}
						alt="ini fotonya"
						className=" object-cover aspect-[16/9]  w-[800px] mb-4"
					/>
					<h1 className="font-bold text-2xl mb-2">What is bootcamp?</h1>
					<p className="text-justify">
						Greetings fellow developers! 👋 Today, I'm thrilled to share with
						you the story behind the creation of
						@codebayu/use-hydration-zustand, a powerful solution born out of the
						necessity to overcome state hydration challenges in React
						applications, particularly when dealing with Zustand's persist
						state.
					</p>
				</div>
			</div>
		</div>
	);
}

export default LearningPage;
