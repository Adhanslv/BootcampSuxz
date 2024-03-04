import React from "react";

const CardTestimoni = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-sm border-2 border-unguJanda bg-white px-6 py-5  rounded-md mobile:max-w-screen-sm">
			{children}
		</div>
	);
};

export default CardTestimoni;
