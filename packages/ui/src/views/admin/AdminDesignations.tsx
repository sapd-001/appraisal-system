import React from 'react';
import { useAppSelector } from '../../state/hooks';

import AddAdminDesignation from './AddAdminDesignation';
import Table, { TableColumnProps } from '../../components/Table';

const cols: TableColumnProps[] = [
	// id,name,description,actions
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


const AdminDesignations = () => {
	const { designations:{designations}} = useAppSelector((state) => state);
	const [addingDesignation, setAddingDesignation] =
		React.useState<boolean>(false);
	const closeOpenModal = () => {
		setAddingDesignation(false);
	};
	
	return (
		<div>
			<div className="px-4 py-1 my-4 border mx-2 flex justify-between">
				<h1>Designation</h1>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setAddingDesignation(true);
					}}
					className="bg-blue-700 text-white px-4 py-2 rounded"
				>
					<span className="material-icons">add new Designation</span>
				</button>
			</div>
			<div>
			{addingDesignation && (
					<AddAdminDesignation closeModal={closeOpenModal} />
				)}
				<Table columns={cols} rows={designations} />
			</div>
		</div>
	);
};

export default AdminDesignations;
