import React from 'react';

interface IBaseLayoutProps {
	children: React.ReactElement;
}

const BaseLayout = ({ children }: IBaseLayoutProps) => {
	return (
		<div className="bg-slate-100">
			<div className="">{children}</div>;
		</div>
	);
};

export default BaseLayout;
