import React from "react";

const CardLearning = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-sm border-2 border-black/10 bg-white px-6 py-5 hover:shadow-xl rounded-md ">
			{children}
		</div>
	);
};

export default CardLearning;
