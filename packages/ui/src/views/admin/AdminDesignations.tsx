import React from 'react';
import Table, { TableColumnProps } from '../../components/Table';
const cols: TableColumnProps[] = [
	// id,name,description,actions
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
		columnName: 'description',
		id: 3,
		title: 'Description',
		customElement: false
	},
	{
		columnName: 'actions',
		id: 4,
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
		name: 'Software Engineer',
		description: 'Software Engineer',
		actions: ''
	},
	{
		id: 2,
		name: 'Software Engineer',
		description: 'Software Engineer',
		actions: ''
	},
	{
		id: 3,
		name: 'Software Engineer',
		description: 'Software Engineer',
		actions: ''
	},
	{
		id: 4,
		name: 'Software Engineer',
		description: 'Software Engineer',
		actions: ''
	}
];

const AdminDesignations = () => {
	return (
		<div>
			<h1>Designations</h1>
			<div>
				<Table columns={cols} rows={rows} />
			</div>
		</div>
	);
};

export default AdminDesignations;
