import EmployeeSidebar from '../components/EmployeeSidebar';
import LayoutFooter from '../components/LayoutFooter';
import LayoutHeader from '../components/LayoutHeader';
import React from 'react';

type EmployeeLayoutProps = {
	children: JSX.Element;
};

const EmployeeLayout = ({ children }: EmployeeLayoutProps) => {
	return (
		<div className="flex">
			<EmployeeSidebar />
			<div className='w-full left-64'>
				<LayoutHeader />
				<div className="min-h-screen overflow-y-scroll">{children}</div>
				<LayoutFooter />
			</div>
		</div>
	);
};

export default EmployeeLayout;
