import DashSummaryItem from '../../components/DashSummaryItem';
import React from 'react';
import Table from '../../components/Table';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../state/hooks';

const EmployeeDashboard = () => {
	const { tasks } = useAppSelector((state) => state.tasks);
	console.log(tasks);

	return (
		<div>
			<h1 className='p-4 my-2 text-xl font-bold border'>Welcome to the Dashboard</h1>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,360px))] gap-4 p-4">
				<DashSummaryItem
					count={tasks.length}
					icon={faBriefcase}
					title={'Tasks summary'}
				/>
			</div>
		</div>
	);
};

export default EmployeeDashboard;
