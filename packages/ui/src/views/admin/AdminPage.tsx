import AdminLayout from '../../layouts/AdminLayout';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { apiRequest } from '../../api';
import { useAppSelector } from '../../state/hooks';

const Admin = () => {
	const { token } = useAppSelector((state) => state.root.user);
	const fetchDepartments = async () => {
		const res = await apiRequest.get('/departments/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		console.log(res);
	};

	const fetchEmployees = async () => {
		const res = await apiRequest.get('/users/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		console.log(res);
	};

	const fetchRoles = async () => {
		const res = await apiRequest.get('/roles/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		console.log(res);
	};

	const fetchDesignations = async () => {
		const res = await apiRequest.get('/designations/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
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
