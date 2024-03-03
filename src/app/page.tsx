import React from "react";
import HeroSection from "../pages/Hero";
import Navbar from "../components/Navbar/Navbar";
import LearningSection from "../components/CardLearning/Learning";
import About from "../components/AboutUs";
import CompanySection from "@/components/CompanySection";
const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<LearningSection />
			<About />
			<CompanySection />
		</div>
	);
};

export default Home;
