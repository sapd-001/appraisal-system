/* eslint-disable @typescript-eslint/no-explicit-any */
import DashSummaryItem from '../../components/DashSummaryItem';
import React from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useAppSelector } from '../../state/hooks';

const EmployeeDashboard = () => {
	const { tasks } = useAppSelector((state) => state.tasks);

	const tasksInprogress = React.useMemo(() => {
		return tasks.filter(
			(task: any) =>
				String(task.status)
					.toLowerCase()
					.replace(/[\S]{1,}/g, '') === 'inprogress'
		);
	}, [tasks]);

	const tasksCompleted = React.useMemo(() => {
		return tasks.filter((task: any) => task.status === 'completed');
	}, [tasks]);

	const tasksOverdue = React.useMemo(() => {
		return tasks.filter(
			(task: any) =>
				moment(task.dueDate).isBefore(moment()) &&
				task.status !== 'completed'
		);
	}, [tasks]);

	return (
		<div>
			<h1 className="p-4 my-2 text-xl font-bold border">
				Welcome to the Dashboard
			</h1>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,360px))] gap-4 p-4">
				<DashSummaryItem
					count={tasks.length}
					icon={faBriefcase}
					title={'Tasks summary'}
				/>
				<DashSummaryItem
					count={tasksInprogress.length}
					icon={faBriefcase}
					title={'Tasks in progress'}
				/>
				<DashSummaryItem
					count={tasksCompleted.length}
					icon={faBriefcase}
					title={'Tasks completed'}
				/>
				<DashSummaryItem
					count={tasksOverdue.length}
					icon={faBriefcase}
					title={'Tasks overdue'}
				/>
			</div>
		</div>
	);
};

export default EmployeeDashboard;
