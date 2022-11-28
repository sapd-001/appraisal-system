import AddAdminTasks from './AddAdminTasks';
import React from 'react';
import StatusBadge from '../../components/StatusBadge';
import { useAppSelector } from '../../state/hooks';
import Table, { TableColumnProps } from '../../components/Table';

const AdminTasks = () => {
	const cols: TableColumnProps[] = [
		{
			columnName: 'id',
			id: 1,
			title: 'UID',
			customElement: false
		},
		{
			columnName: 'title',
			id: 2,
			title: 'Task Name',
			customElement: false
		},
		{
			columnName: 'dueDate',
			id: 3,
			title: 'Due Date',
			customElement: false
		},
		{
			columnName: 'assignee',
			id: 4,
			title: 'Assigned to',
			customElement: false
		},
		{
			columnName: 'status',
			id: 5,
			title: 'Status',
			customElement: true,
			element: ({ data }) => (
				<StatusBadge name={data.status} status={data.status} />
			)
		},
		{
			columnName: 'Actions',
			id: 6,
			title: 'Actions',
			customElement: true,
			element: ({ data }) => {
				return (
					<div className="flex items-center text-[14px] gap-2">
						<button
							onClick={(e) => {
								e.preventDefault();
								updateTask(data.id);
							}}
							className="px-3 text-white bg-blue-600 rounded-3xl h-fit"
						>
							Edit
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								deleteTask(data.id);
							}}
							className="px-3  text-white bg-red-600 rounded-3xl h-fit"
						>
							Delete
						</button>
					</div>
				);
			}
		}
	];

	const data = [
		{
			id: 1,
			title: 'Hold financial meeting',
			dueDate: '20th October 2022',
			assignee: 'Jane Doe',
			status: 'done'
		},
		{
			id: 2,
			title: 'Hold financial meeting',
			dueDate: '20th October 2022',
			assignee: 'Nita Rose',
			status: 'overdue'
		}
	];

	const updateTask = async (id: string) => {
		console.log(`Updating task id ${id}`);
	};
	const deleteTask = async (id: string) => {
		console.log(`Deleting task id ${id}`);
	};

	const { tasks } = useAppSelector((state) => state.tasks);
	const [addingTasks, setAddingTasks] =
	React.useState<boolean>(false);
	const closeOpenModal = () => {
		setAddingTasks(false);
	};
	return (
		<div>
		<div className="px-4 py-1 my-4 border mx-2 flex justify-between">
			<h1>Tasks</h1>
			<button
				onClick={(e) => {
					e.stopPropagation();
					setAddingTasks(true);
				}}
				className="bg-blue-700 text-white px-4 py-2 rounded"
			>
				<span className="material-icons">add new Task</span>
			</button>
		</div>
		<div>
			{addingTasks && (
				<AddAdminTasks closeModal={closeOpenModal} />
			)}
			<Table columns={cols} rows={data} />
		</div>
	</div>
	);
};

export default AdminTasks;
