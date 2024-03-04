import React from "react";

const SeeClass = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className="w-full py-2 font-bold text-white rounded-md bg-learning  ">
			{children}
		</button>
	);
};

const BuyNow = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className="w-full py-2 font-bold text-white rounded-md bg-unguJanda  ">
			{children}
		</button>
	);
};

export default SeeClass;
