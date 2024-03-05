import React from "react";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";
import { IoArrowBackCircle, IoEyeSharp } from "react-icons/io5";
import { MdOutlineComment } from "react-icons/md";

function PremiumPage() {
	return (
		<div className="px-[25vw] mt-12">
			<Link href="/" className="flex items-center gap-x-2 mb-7">
				<IoArrowBackCircle size={30} />
				<span className="hover:translate-x-2 transition duration-700 font-semibold ease-in-out text-[18px]">
					Back
				</span>
			</Link>
			<div>
				<h1 className="text-xl mb-6">
					<span className="font-bold">Starter</span> with free class access for
					that start learning code and design
				</h1>
				<div className="flex items-center justify-between mb-12  ">
					<h2>Published onSeptember 20, 2023</h2>
					<div className="flex items-center gap-x-5 text-unguJanda">
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
					<h1>What is bootcamp?</h1>
					<h1>What is bootcamp?</h1>
				</div>
			</div>
		</div>
	);
}

export default PremiumPage;
