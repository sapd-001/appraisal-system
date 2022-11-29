import AddAdminTasks from './AddAdminTasks';
import React from 'react';
import StatusBadge from '../../components/StatusBadge';
import moment from 'moment';
import { useAppSelector } from '../../state/hooks';

import Table, { TableColumnProps } from '../../components/Table';

const AdminTasks = () => {
	const cols: TableColumnProps[] = [
		{
			columnName: 'name',
			id: 1,
			title: 'Task Name',
			customElement: false
		},
		{
			columnName: 'evaluator',
			id: 2,
			title: 'Task evaluator',
			customElement: false
		},{
			columnName: 'designation',
			id: 3,
			title: 'Task Designation',
			customElement: false
		},
		{
			columnName: 'dueDate',
			id: 4,
			title: 'Due Date',
			customElement: false
		},
		{
			columnName: 'assignedTo',
			id: 5,
			title: 'Assigned to',
			customElement: false
		},
		{
			columnName: 'status',
			id: 6,
			title: 'Status',
			customElement: true,
			element: ({ data }) => (
				<StatusBadge name={data.status} status={data.status} />
			)
		},
		{
			columnName: 'Actions',
			id: 7,
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

	const updateTask = async (id: string) => {
		console.log(`Updating task id ${id}`);
	};
	const deleteTask = async (id: string) => {
		console.log(`Deleting task id ${id}`);
	};

	const { tasks } = useAppSelector((state) => state.tasks);
	const [addingTasks, setAddingTasks] = React.useState<boolean>(false);
	const closeOpenModal = () => {
		setAddingTasks(false);
	};

	const adminTasks = React.useMemo(() => {
		return tasks.map((task) => {
			const { firstName, lastName } = task.assignedTo as unknown as {
				firstName: string;
				lastName: string;
			};
			const { evaluator, designation, department } = task as unknown as {
				evaluator: Record<string, unknown>;
				designation: Record<string, unknown>;
				department: Record<string, unknown>;
			};

			return {
				...task,
				assignedTo: `${firstName} ${lastName}`,
				dueDate: moment(task.dueDate).format('LLL'),
				evaluator: `${evaluator.firstName} ${evaluator.lastName}`,
				designation: designation.name,
				department: department.name
			};
		});
	}, [tasks]);

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
				{addingTasks && <AddAdminTasks closeModal={closeOpenModal} />}
				<Table columns={cols} rows={adminTasks} />
			</div>
		</div>
	);
};

export default AdminTasks;
