import React from "react";
import Link from "next/link";
import { IoArrowBackCircle, IoEyeSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import Cover from "../../img/PageStarter/sigmund-Im_cQ6hQo10-unsplash.jpg";
import Image from "next/image";

function LearningPage() {
	return (
		<div className="container mx-auto px-56 mt-12 mobile:container min-h-[1550px]">
			<Link href="/" className="flex items-center gap-x-2 mb-7">
				<IoArrowBackCircle size={30} />
				<span className="hover:translate-x-2 transition duration-700 font-semibold ease-in-out text-[18px]">
					Back
				</span>
			</Link>
			<div>
				<h1 className="text-xl mb-2 ">
					Unlock Your Potential: Embark on a Transformational Journey with Our
					Intensive Bootcamp!
				</h1>
				<div className="flex items-center justify-between mb-7  mobile:flex-wrap ">
					<h2>Published on March 06, 2024</h2>
					<div className="flex items-center gap-x-5 text-black/50 mobile:flex-wrap">
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
				<div className="w-full  border-b-2 border-b-black/20 border-dashed  mb-7 "></div>
				<div className="mb-6">
					<Image
						src={Cover}
						alt="ini fotonya"
						className=" object-cover w-full  mb-4 rounded-sm"
					/>
					<h1 className="font-semibold text-2xl mb-2">
						Bootcamp Starter Pack: Kickstart Your Journey to Success
					</h1>
					<p className="  font-light ">
						Are you ready to embark on a transformative journey towards mastery
						and achievement? Our Bootcamp Starter Pack is your gateway to
						unlocking your full potential and conquering new heights in your
						chosen field. Crafted with precision and expertise, this
						comprehensive toolkit is designed to equip you with the essential
						resources and mindset to thrive in any bootcamp environment. Whats
						Inside:
					</p>
				</div>
				<div className="mobile:container">
					<ul className="list-disc px-[3vw] -mt-1 leading-10 font-light	 text-justify">
						<li>
							Orientation Guide: Get acquainted with the bootcamps mission,
							curriculum, and expectations. This guide will provide you with a
							roadmap to navigate through the intensive learning experience
							ahead.
						</li>
						<li>
							Technical Resources: Access to a curated selection of textbooks,
							online courses, and coding platforms tailored to the specific
							requirements of your bootcamp. Whether youre delving into
							programming languages, data analysis, or cybersecurity, these
							resources will serve as your indispensable companions on your
							learning journey.
						</li>
						<li>
							Workshop Materials: Dive deep into hands-on workshops and
							practical exercises designed to reinforce key concepts and foster
							experiential learning. From group projects to solo challenges,
							these materials will sharpen your skills and prepare you for
							real-world scenarios.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default LearningPage;
