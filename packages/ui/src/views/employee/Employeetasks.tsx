/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import StatusBadge from '../../components/StatusBadge';
import Table from '../../components/Table';
import UpdateEmployeeTaskStatus from './UpdateEmployeeTaskStatus';
import moment from 'moment';
import { useAppSelector } from '../../state/hooks';

const Employeetasks = () => {
	const { tasks } = useAppSelector((state) => state.tasks);
	const cols = [
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
		},
		{
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
			columnName: 'status',
			id: 5,
			title: 'Status',
			customElement: true,
			element: ({ data }: any) => (
				<StatusBadge name={data.status} status={data.status} />
			)
		},
		{
			columnName: 'Actions',
			id: 6,
			title: 'Actions',
			customElement: true,
			element: ({ data }: any) => {
				return (
					<div className="flex items-center text-[14px] gap-2">
						<button
							onClick={(e: any) => {
								e.preventDefault();
								setCurrentlyUpdating(data);
								setUpdatingtask(true);
							}}
							className="bg-blue-500 text-white px-2 py-1 rounded-md"
						>
							Update
						</button>
					</div>
				);
			}
		}
	];

	const usertasks = React.useMemo(() => {
		return tasks.map((task: any) => {
			return {
				...task,
				dueDate: moment(task.dueDate).format('DD/MM/YYYY'),
				designation: task.designation.name,
				evaluator: `${task.evaluator.firstName} ${task.evaluator.lastName}`,
				// status: moment(task.dueDate).isBefore(moment())
				// 	? 'overdue'
				// 	: task.status
			};
		});
	}, [tasks]);
	const [updatingtask, setUpdatingtask] = React.useState<boolean>(false);
	const closeModal = () => {
		setUpdatingtask(false);
	};

	const [currentlyUpdating, setCurrentlyUpdating] = React.useState<any>(null);
    
	return (
		<div>
			<h1 className="p-4 my-2 text-xl font-bold border">Tasks</h1>
			{updatingtask && (
				<UpdateEmployeeTaskStatus
					closeModal={closeModal}
					task={currentlyUpdating}
				/>
			)}
			<Table columns={cols} rows={usertasks} />
		</div>
	);
};

export default Employeetasks;
