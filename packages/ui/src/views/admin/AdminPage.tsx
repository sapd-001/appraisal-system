import AdminLayout from '../../layouts/AdminLayout';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { apiRequest } from '../../api';

const Admin = () => {
	const fetchDepartments = async () => {
		const res = await apiRequest.get('/departments/all');
		console.log(res);
	};

	const fetchEmployees = async () => {
		const res = await apiRequest.get('/users/all');
		console.log(res);
	};

	const fetchRoles = async () => {
		const res = await apiRequest.get('/roles/all');
		console.log(res);
	};

	const fetchDesignations = async () => {
		const res = await apiRequest.get('/designations/all');
		console.log(res);
	};

	React.useEffect(() => {
		Promise.all([
			fetchDepartments(),
			fetchEmployees(),
			fetchRoles(),
			fetchDesignations()
		]);
	}, []);

	return (
		<AdminLayout>
			<Outlet />
		</AdminLayout>
	);
};

export default Admin;
