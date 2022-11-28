/* eslint-disable indent */
/* eslint-disable @typescript-eslint/naming-convention */
import Admin from '../views/admin/AdminPage';
import AdminDashboard from '../views/admin/AdminDashboard';
import AdminDepartments from '../views/admin/AdminDepartments';
import AdminDesignations from '../views/admin/AdminDesignations';
import AdminEmployees from '../views/admin/AdminEmployees';
import AdminEvaluations from '../views/admin/AdminEvaluations';
import AdminEvaluators from '../views/admin/AdminEvaluators';
import AdminTasks from '../views/admin/AdminTasks';
import AdminUsers from '../views/admin/AdminUsers';
import Homepage from '../views/Homepage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		id: 'Home',
		path: '/',
		element: <Homepage />
	},
	{
		element: <Admin />,
		id: 'Admin',
		path: '/admin',
		children: [
			{
				element: <AdminDashboard />,
				id: 'Dashboard',
				path: '/admin/'
			},
			{
				element: <AdminDepartments />,
				id: 'Department',
				path: '/admin/departments'
			},
			{
				element: <AdminDesignations />,
				id: 'Designations',
				path: '/admin/designations'
			},
			{
				element: <AdminEmployees />,
				id: 'Employees',
				path: '/admin/employees'
			},
			{
				element: <AdminEvaluations />,
				id: 'Evaluations',
				path: '/admin/evaluation'
			},
			{
				element: <AdminTasks />,
				id: 'Tasks',
				path: '/admin/tasks'
			},
			{
				element: <AdminEvaluators />,
				id: 'Evaluators',
				path: '/admin/evaluators'
			},
			{
				element: <AdminUsers />,
				id: 'Users',
				path: '/admin/users'
			}
		]
	}
]);

export default router;
