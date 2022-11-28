import React from 'react';
import Table, { TableColumnProps } from '../../components/Table';
const cols: TableColumnProps[] = [
	// id,name,email,department,designation,phone,actions
	{
		columnName: 'id',
		id: 1,
		title: '#',
		customElement: false
	},
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
		columnName: 'phone',
		id: 6,
		title: 'Phone',
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
const rows = [
	{
		id: 1,
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		department: 'IT',
		designation: 'Software Engineer',
		phone: '1234567890'
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: 'Jdoe@gmail.com',
		department: 'HR',
		designation: 'HR Manager',
		phone: '1234567890'
	},
	{
		id: 3,
		name: 'Sam Smith',
		email: 's@gmail.com',
		department: 'IT',
		designation: 'Software Engineer',
		phone: '1234567890'
	}
];

const AdminEmployees = () => {
	return (
		<div>
			<h1>Employees</h1>
			<div>
				<Table columns={cols} rows={rows} />
			</div>
		</div>
	);
};

export default AdminEmployees;
