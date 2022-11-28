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

interface IRouteProps {
	pathName: string;
	urlPath: string;
	Component: React.ReactElement;
	isNested: boolean;
	children?: IRouteProps[];
}

const appRoutes: IRouteProps[] = [
	{
		pathName: 'Home',
		urlPath: '/',
		Component: <Homepage />,
		isNested: false
	},
	{
		Component: <Admin />,
		isNested: true,
		pathName: 'Admin',
		urlPath: '/admin',
		children: [
			{
				Component: <AdminDashboard />,
				isNested: false,
				pathName: 'Dashboard',
				urlPath: '/admin/'
			},
			{
				Component: <AdminDepartments />,
				isNested: false,
				pathName: 'Department',
				urlPath: '/admin/departments'
			},
			{
				Component: <AdminDesignations />,
				isNested: false,
				pathName: 'Designations',
				urlPath: '/admin/designations'
			},
			{
				Component: <AdminEmployees />,
				isNested: false,
				pathName: 'Employees',
				urlPath: '/admin/employees'
			},
			{
				Component: <AdminEvaluations />,
				isNested: false,
				pathName: 'Evaluations',
				urlPath: '/admin/evaluation'
			},
			{
				Component: <AdminTasks />,
				isNested: false,
				pathName: 'Tasks',
				urlPath: '/admin/tasks'
			},
			{
				Component: <AdminEvaluators />,
				isNested: false,
				pathName: 'Evaluators',
				urlPath: '/admin/evaluators'
			},{
				Component: <AdminUsers />,
				isNested: false,
				pathName: 'Users',
				urlPath: '/admin/users',
			}
		]
	}
];

export { appRoutes as RoutePaths };
