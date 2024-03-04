import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Logo from "../../img/icon.png";
import Image from "next/image";
import Link from "next/link";
const Footter = () => {
	return (
		<div className="px-[10vw] items-center  mt-44 mb-6 grid grid-cols-10 tablet:block mobile:block">
			<div className="col-span-4 ">
				<Image src={Logo} alt="ini fotonya" width={44} className=" mb-16  " />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
					blanditiis vero! Totam!
				</p>
			</div>
			<div className="col-span-2 ">
				<div className="mb-4 text-xl font-semibold mobile:mt-6 ">Company</div>
				<div className="flex flex-col gap-y-3">
					<p>Home</p>
					<p>Blogs</p>
					<p>Careers</p>
					<p>Portofolio</p>
				</div>
			</div>
			<div className="col-span-2 ">
				<div className="mb-4 text-xl font-semibold mobile:mt-6 ">Links</div>
				<div className="flex flex-col gap-y-3">
					<p>Home</p>
					<p>Blogs</p>
					<p>Careers</p>
					<p>Portofolio</p>
				</div>
			</div>
			<div className="col-span-2 ">
				<div className="mb-4 text-xl font-semibold mt-3">Contact</div>
				<div className="flex flex-col gap-y-3">
					<Link
						href={"https://github.com/Adhanslv"}
						className="text-unguJanda flex items-center gap-x-3 cursor-pointer"
					>
						<FaGithub size={22} />
						Adhanslv
					</Link>
					<Link
						href={"https://www.instagram.com/ash4rr/"}
						className="text-unguJanda flex items-center gap-x-3 cursor-pointer"
					>
						<IoLogoInstagram size={22} />
						ash4rr
					</Link>
					<p>
						Jl. Sultan Alimudin Perum Padat Karya Gg.Karya Indah Blok A
						Kec.Samarinda Ilir 54422
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footter;
