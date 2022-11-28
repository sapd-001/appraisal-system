import AddAdminDepartment from './AddAdminDepartment';
import React from 'react';
import { useAppSelector } from '../../state/hooks';

import Table, { TableColumnProps } from '../../components/Table';

const cols: TableColumnProps[] = [
	{
		columnName: '_id',
		id: 1,
		title: 'UID',
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
		element: ({ data }) => (
			<span className="w-[10rem] text-sm text-clip">
				{data.description}
			</span>
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
	const [addingDepartment, setAddingDepartment] =
		React.useState<boolean>(false);
	const { departments } = useAppSelector((state) => state.departments);
	console.log(departments);
	const closeOpenModal = () => {
		setAddingDepartment(false);
	};

	return (
		<div>
			<div className="px-4 py-1 my-4 border mx-2 flex justify-between">
				<h1>Departements</h1>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setAddingDepartment(true);
					}}
					className="bg-blue-700 text-white px-4 py-2 rounded"
				>
					<span className="material-icons">add new Department</span>
				</button>
			</div>
			<div>
				{addingDepartment && (
					<AddAdminDepartment closeModal={closeOpenModal} />
				)}
				<Table columns={cols} rows={departments} />
			</div>
		</div>
	);
};

export default AdminDepartments;
