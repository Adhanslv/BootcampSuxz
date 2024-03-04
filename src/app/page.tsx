import React from "react";
import HeroSection from "../pages/Hero";
import Navbar from "../components/Navbar/Navbar";
import LearningSection from "../components/CardLeaning/Learning";
import About from "../components/AboutUs/index";
import CompanySection from "@/components/CompanySection";
import Testimoni from "@/pages/Testimoni";
import GetStarted from "@/pages/GetStarted";
import Footter from "@/components/Footer/page";
const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<LearningSection />
			<About />
			<CompanySection />
			<Testimoni />
			<GetStarted />
			<Footter />
		</div>
	);
};

export default Home;
