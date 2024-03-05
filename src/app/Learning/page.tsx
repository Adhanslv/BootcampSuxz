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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						commodi placeat natus perferendis eligendi, illum ipsum excepturi
						voluptates cumque aliquam sapiente necessitatibus, est nisi optio
						sit consectetur voluptate vel quibusdam. Dolore itaque hic
						asperiores a provident porro debitis odio placeat repudiandae sint
						aspernatur ipsa tenetur nostrum, nemo quos deserunt magnam ad vel?
						Quaerat magnam non molestiae provident aliquam repellat porro quod
						facilis odit asperiores voluptates optio nisi ex ea quae, dolor
						laudantium molestias natus, quo delectus officiis eveniet illum
						error voluptatibus. Molestiae maxime eius non mollitia unde quos
						animi adipisci suscipit, facere dicta optio temporibus sint neque?
						Animi dignissimos consectetur facere praesentium odio illum.
						Veritatis necessitatibus odit incidunt sunt impedit quam nisi quia
						obcaecati quis consequatur, repudiandae labore cumque asperiores!
					</p>
				</div>
			</div>
		</div>
	);
}

export default LearningPage;
