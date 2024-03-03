import React from "react";

const SeeClass = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className="w-full py-2 font-bold text-white rounded-md bg-learning  ">
			{children}
		</button>
	);
};

export default SeeClass;
