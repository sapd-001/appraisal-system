import {
	faDashboard,
	faHouse,
	faPencilSquare,
	faTasks,
	faUsers
} from '@fortawesome/free-solid-svg-icons';

export const navlinks = {
	admin: [
		{
			pathName: 'Dashboard',
			urlPath: '/admin/dashboard/',
			icon: faDashboard
		},
		{
			pathName: 'Tasks',
			urlPath: '/admin/dashboard/tasks',
			icon: faTasks
		},
		{
			pathName: 'Evaluation',
			urlPath: '/admin/dashboard/evaluation',
			icon: faPencilSquare
		},
		{
			pathName: 'Departments',
			urlPath: '/admin/dashboard/departments',
			icon: faHouse
		},
		{
			pathName: 'Designations',
			urlPath: '/admin/dashboard/designations',
			icon: faPencilSquare
		},
		{
			pathName: 'Employees',
			urlPath: '/admin/dashboard/employees',
			icon: faPencilSquare
		},
		{
			pathName: 'Evaluator',
			urlPath: '/admin/dashboard/evaluators',
			icon: faPencilSquare
		},
		{ pathName: 'Users', urlPath: '/admin/dashboard/Users', icon: faUsers }
	],
	employee: [
		{
			pathName: 'Dashboard',
			urlPath: '/employee/dashboard/',
			icon: faDashboard
		},
		{
			pathName: 'Tasks',
			urlPath: '/employee/dashboard/tasks',
			icon: faTasks
		},
		{
			pathName: 'Evaluation',
			urlPath: '/employee/dashboard/evaluation',
			icon: faPencilSquare
		}
	],
	evaluator: [
		{
			pathName: 'Dashboard',
			urlPath: '/evaluator/dashboard/',
			icon: faDashboard
		},
		{
			pathName: 'Tasks',
			urlPath: '/evaluator/dashboard/tasks',
			icon: faTasks
		},
		{
			pathName: 'Evaluation',
			urlPath: '/evaluator/dashboard/evaluation',
			icon: faPencilSquare
		}
	]
};

export type NavLinksType = typeof navlinks;
