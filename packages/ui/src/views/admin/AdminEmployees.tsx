import React from 'react';
import { useAppSelector } from '../../state/hooks';

import Table, { TableColumnProps } from '../../components/Table';

const cols: TableColumnProps[] = [
	{
		columnName: 'name',
		id: 2,
		title: 'Name',
		customElement: false
	},
	{
		columnName: 'email',
		id: 3,
		title: 'Email',
		customElement: false
	},
	{
		columnName: 'department',
		id: 4,
		title: 'Department',
		customElement: false
	},
	{
		columnName: 'designation',
		id: 5,
		title: 'Designation',
		customElement: false
	},
	{
		columnName: 'actions',
		id: 7,
		title: 'Actions',
		customElement: true,
		element: () => {
			return (
				<div className="flex space-x-2">
					<button className="bg-blue-500 text-white px-2 py-1 rounded">
						Edit
					</button>
					<button className="bg-red-500 text-white px-2 py-1 rounded">
						Delete
					</button>
				</div>
			);
		}
	}
];


const AdminEmployees = () => {
	const { employees } = useAppSelector((state) => state.employees);

	return (
		<div>
			<h1>Employees</h1>
			<div>
				<Table columns={cols} rows={employees} />
			</div>
		</div>
	);
};

export default AdminEmployees;
