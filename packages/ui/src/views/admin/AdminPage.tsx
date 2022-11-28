import AdminLayout from '../../layouts/AdminLayout';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { apiRequest } from '../../api';
import { loadDepartmentSuccess } from '../../state/slices/departmentsSlice';
import { loadDesignationSuccess } from '../../state/slices/designationsSlice';
import { loadEmployeeSuccess } from '../../state/slices/employeesSlice';
import { loadRoleSuccess } from '../../state/slices/rolesSlice';

import { useAppDispatch, useAppSelector } from '../../state/hooks';

const Admin = () => {
	const { token } = useAppSelector((state) => state.root.user);
	const dispatch = useAppDispatch();
	const fetchDepartments = async () => {
		const res = await apiRequest.get('/departments/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		
		const data = res.data.data;

		dispatch(loadDepartmentSuccess(data));
	};

	const fetchEmployees = async () => {
		const res = await apiRequest.get('/users/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const data = res.data.data;
		dispatch(loadEmployeeSuccess(data));
	};

	const fetchRoles = async () => {
		const res = await apiRequest.get('/roles/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const data = res.data.data;
		dispatch(loadRoleSuccess(data));
	};

	const fetchDesignations = async () => {
		const res = await apiRequest.get('/designations/all', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const data = res.data.data;
		dispatch(loadDesignationSuccess(data));
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
