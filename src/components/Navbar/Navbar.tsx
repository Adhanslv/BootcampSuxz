"use client";
import React, { useState } from "react";
import logoProduct from "../../img/logo.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="px-[10vw] py-4 bg-white top-0 right-0 left-0 fixed tablet:px-12 mobile:px-7	">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-between">
					<div className="flex items-center mr-12 ">
						{/* <NavbarResponsive /> */}
						<Image
							src={logoProduct}
							alt="ini logonya"
							width={120}
							className="mobile:w-[80px] mobile:items-center"
						/>
					</div>
					<div className="flex items-center gap-x-4 mr-12 tablet:hidden mobile:hidden">
						<a href="" className="px-4 py-2">
							Home
						</a>
						<Link href="/Learning" className="px-4 py-2">
							Learning
						</Link>
						<a href="" className="px-4 py-2">
							About Us
						</a>
						<a href="" className="px-4 py-2">
							Testimonial
						</a>
					</div>
				</div>
				<div className="flex items-center  gap-x-6  ">
					<a href="" className="text-unguJanda mobile:hidden ">
						Log in
					</a>
					<a
						href=""
						className="bg-unguJanda text-white px-4 py-2 rounded-md mobile:hidden "
					>
						Sign up
					</a>
					<button
						onClick={() => setOpen((open) => !open)}
						className="lg:hidden sm:hidden focus:outline-none "
					>
						<RxHamburgerMenu size={23} />
					</button>
				</div>
			</div>
			{/* Mobile Navbar */}
			<div className="flex items-center md:hidden lg:hidden tablet:hidden   ">
				<div
					className={`${
						open ? "block" : "hidden"
					} absolute top-0 right-0 mr-10 w-56  mt-12   overflow-hiddenn  border border-black/20 text-black rounded-lg px-2 py-2.5 mobile:bg-white `}
				>
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md "
					>
						Home
					</Link>
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md"
					>
						Learning
					</Link>
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md"
					>
						About Us
					</Link>
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md  "
					>
						Testimonial
					</Link>
					<div className=" h-px	 my-1 w-full bg-black/20 " />
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/10 hover:rounded-md"
					>
						Sign in
					</Link>
					<Link
						href={"/"}
						className="px-4 py-2 block hover:bg-black/20 hover:rounded-md"
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
