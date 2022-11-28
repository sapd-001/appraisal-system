/* eslint-disable indent */
/* eslint-disable @typescript-eslint/naming-convention */
import Admin from '../views/admin/AdminPage';
import AdminDashboard from '../views/admin/AdminDashboard';
import AdminDepartments from '../views/admin/AdminDepartments';
import AdminDesignations from '../views/admin/AdminDesignations';
import AdminEmployees from '../views/admin/AdminEmployees';
import AdminEvaluations from '../views/admin/AdminEvaluations';
import AdminEvaluators from '../views/admin/AdminEvaluators';
import AdminProtected from '../components/AdminProtected';
import AdminTasks from '../views/admin/AdminTasks';
import AdminUsers from '../views/admin/AdminUsers';
import EmployeeDashboard from '../views/employee/EmployeeDashboard';
import EvaluatorDashboard from '../views/evaluator/EvaluatorDashboard';
import EvaluatorProtected from '../components/EvaluatorProtected';
import Homepage from '../views/Homepage';
import Protected from '../components/Protected';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		id: 'Home',
		path: '/',
		element: <Homepage />
	},
	{
		element: (
			<AdminProtected>
				<Admin />
			</AdminProtected>
		),
		id: 'Admin',
		path: '/admin/dashboard',
		children: [
			{
				element: <AdminDashboard />,
				id: 'Dashboard',
				path: '/admin/dashboard/'
			},
			{
				element: <AdminDepartments />,
				id: 'Department',
				path: '/admin/dashboard/departments'
			},
			{
				element: <AdminDesignations />,
				id: 'Designations',
				path: '/admin/dashboard/designations'
			},
			{
				element: <AdminEmployees />,
				id: 'Employees',
				path: '/admin/dashboard/employees'
			},
			{
				element: <AdminEvaluations />,
				id: 'Evaluations',
				path: '/admin/dashboard/evaluation'
			},
			{
				element: <AdminTasks />,
				id: 'Tasks',
				path: '/admin/dashboard/tasks'
			},
			{
				element: <AdminEvaluators />,
				id: 'Evaluators',
				path: '/admin/dashboard/evaluators'
			},
			{
				element: <AdminUsers />,
				id: 'Users',
				path: '/admin/dashboard/users'
			}
		]
	},
	{
		element: (
			<EvaluatorProtected>
				<EvaluatorDashboard />
			</EvaluatorProtected>
		),
		id: 'Evaluator',
		path: '/evaluator/dashboard',
		children: []
	},
	{
		element: (
			<Protected>
				<EmployeeDashboard />
			</Protected>
		),
		id: 'Employee',
		path: '/employee/dashboard',
		children: []
	}
]);

export default router;
