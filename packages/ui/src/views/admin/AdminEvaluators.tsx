/* eslint-disable camelcase */
import AddAdminEvaluators from './AddAdminEvaluators';
import React from 'react';
import { useAppSelector } from '../../state/hooks';

import Table, { TableColumnProps } from '../../components/Table';

const cols: TableColumnProps[] = [
	// id,name,email,actions
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
		customElement: true,
		element: ({ data }) => <div>{`${data.firstName} ${data.lastName}`}</div>
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
	const { evaluators } = useAppSelector((state) => state.evaluators);
	const [addingEvaluators, setAddingEvaluators] =
		React.useState<boolean>(false);
	const closeOpenModal = () => {
		setAddingEvaluators(false);
	};

	return (
		<div>
			<div className="px-4 py-1 my-4 border mx-2 flex justify-between">
				<h1>Evaluators</h1>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setAddingEvaluators(true);
					}}
					className="bg-blue-700 text-white px-4 py-2 rounded"
				>
					<span className="material-icons">add new Evaluator</span>
				</button>
			</div>
			<div>
				{addingEvaluators && (
					<AddAdminEvaluators closeModal={closeOpenModal} />
				)}
				<Table columns={cols} rows={evaluators} />
			</div>
		</div>
	);
};

export default AdminEvaluators;
