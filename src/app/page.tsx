import React from "react";
import HeroSection from "../pages/Hero";
import Navbar from "../components/Navbar/Navbar";
import LearningSection from "../components/CardLeaning/Learning";
import About from "../components/AboutUs";
import CompanySection from "@/components/CompanySection";
import Testimoni from "@/pages/Testimoni";
import GetStarted from "@/pages/GetStarted";
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
		</div>
	);
};

export default Home;
