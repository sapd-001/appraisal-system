import AdminLayout from '../../layouts/AdminLayout';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Admin = () => {
	return (
		<AdminLayout>
			<Outlet />
		</AdminLayout>
	);
};

export default Admin;
