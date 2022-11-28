/* eslint-disable camelcase */
import React from 'react';
import Table, { TableColumnProps } from '../../components/Table';
const cols: TableColumnProps[] = [
	// id,name,email,actions
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
		customElement: true,
		element: ({data}) => (
			<div>{`${data.first_name} ${data.last_name}`}</div>
		)
	},
	{
		columnName: 'email',
		id: 3,
		title: 'Email',
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
		first_name: 'jane',
		last_name: 'Doe',
		email: 'jdoe@gmail.com'
	}
];

const AdminEvaluators = () => {
	return (
		<div>
			<h1>Evaliuators</h1>
			<div>
				<Table columns={cols} rows={rows} />
			</div>
		</div>
	);
};

export default AdminEvaluators;
