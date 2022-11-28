import React from 'react';

type WidthWrapperProps = {
	children: React.ReactElement;
};

const WidthWrapper = ({ children }: WidthWrapperProps) => {
	return <div className="max-w-[1560px] mx-auto">{children}</div>;
};

export default WidthWrapper;
