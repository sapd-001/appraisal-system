import EmployeeLayout from '../../layouts/EmployeeLayout';
import { Outlet } from 'react-router-dom';
import React from 'react';

const EmployeePage = () => {
	return (
		<EmployeeLayout>
			<Outlet />
		</EmployeeLayout>
	);
};

export default EmployeePage;
