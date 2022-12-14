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
import EmployeeEvaluations from '../views/employee/EmployeeEvaluations';
import EmployeePage from '../views/employee/EmployeePage';
import Employeetasks from '../views/employee/Employeetasks';
import EvaluatorDashboard from '../views/evaluator/EvaluatorDashboard';
import EvaluatorProtected from '../components/EvaluatorProtected';
import Homepage from '../views/Homepage';
import NotFound from '../views/NotFound';
import Profile from '../views/Profile';
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
				id: 'Admin Dashboard',
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
				<EmployeePage />
			</Protected>
		),
		id: 'Employee',
		path: '/user/dashboard',
		errorElement: <div>Not Found</div>,
		children: [
			{
				element: <EmployeeDashboard />,
				id: 'Employee Dashboard',
				path: '/user/dashboard/'
			},
			{
				element: <Employeetasks />,
				id: 'Employee Tasks',
				path: '/user/dashboard/tasks'
			},
			{
				element: <EmployeeEvaluations />,
				id: 'Employee Evaluations',
				path: '/user/dashboard/evaluations'
			}
		]
	},
	{
		element: (
			<Protected>
				<Profile />
			</Protected>
		),
		id: 'Profile',
		path: '/account/profile'
	},
	{
		element: <NotFound />,
		id: 'Not Found',
		path: '*'
	}
]);

export default router;
