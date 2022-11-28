import React from 'react';
import Table, { TableColumnProps } from '../../components/Table';

const cols: TableColumnProps[] = [
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
		customElement: false,
		element:({data})=> (
			<span className='w-[10rem] text-sm text-clip'>{data.description}</span>
		)
			
		
	},
	{
		columnName: 'actions',
		id: 4,
		title: 'Actions',
		customElement: false
	}
];
const rows = [
	{
		id: 1,
		name: 'IT',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}
];

const AdminDepartments = () => {
	return (
		<div>
			<div className="px-4 py-1 my-4 border mx-2">
				<h1>Departements</h1>
			</div>
			<div>
				<Table columns={cols} rows={rows} />
			</div>
		</div>
	);
};

export default AdminDepartments;
