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
			urlPath: '/admin/',
			icon: faDashboard
		},{
			pathName: 'Tasks',
			urlPath: '/admin/tasks',
			icon: faTasks
		},
		{
			pathName: 'Evaluation',
			urlPath: '/admin/evaluation',
			icon: faPencilSquare
		},
		{
			pathName: 'Departments',
			urlPath: '/admin/departments',
			icon: faHouse
		},
		{
			pathName: 'Designations',
			urlPath: '/admin/designations',
			icon: faPencilSquare
		},
		{
			pathName: 'Employees',
			urlPath: '/admin/employees',
			icon: faPencilSquare
		},
		{
			pathName: 'Evaluator',
			urlPath: '/admin/evaluators',
			icon: faPencilSquare
		},
		{ pathName: 'Users', urlPath: '/admin/Users', icon: faUsers }
	]
};

export type NavLinksType = typeof navlinks;
