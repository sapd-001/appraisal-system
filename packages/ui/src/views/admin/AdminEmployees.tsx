import React from 'react';
import { useAppSelector } from '../../state/hooks';

import AddAdminEmployees from './AddAdminEmployees';
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
	const [addingEmployees, setAddingEmployees] =
	React.useState<boolean>(false);
const closeOpenModal = () => {
	setAddingEmployees(false);
};

	return (
		<div>
			<div className="px-4 py-1 my-4 border mx-2 flex justify-between">
				<h1>Employees</h1>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setAddingEmployees(true);
					}}
					className="bg-blue-700 text-white px-4 py-2 rounded"
				>
					<span className="material-icons">add new Employee</span>
				</button>
			</div>
			<div>
			{addingEmployees && (
					<AddAdminEmployees closeModal={closeOpenModal} />
				)}
				<Table columns={cols} rows={employees} />
			</div>
		</div>
	);
};

export default AdminEmployees;
