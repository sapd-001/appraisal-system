import DashSummaryItem from '../../components/DashSummaryItem';
import React from 'react';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../state/hooks';
// import { useAppSelector } from '../../state/hooks';
// import { useAppSelector } from '../../state/hooks';

const AdminDashboard = () => {
	const {
		departments: { departments },
		designations: { designations },
		employees: { employees },
		roles: { roles },
		tasks: { tasks },
		evaluators: { evaluators },
		admins: { admins },
		normalUsers: { normalUsers }
	} = useAppSelector((state) => state);

	return (
		<div className="flex flex-col gap-4">
			<div className="border-b border-slate-400 py-6 px-2">
				<h1 className="text-4xl font-bold">
					Welcome to the admin dashboard
				</h1>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] p-4 gap-4">
				<DashSummaryItem
					count={departments.length}
					title={'Departments'}
					icon={faLightbulb}
				/>
				<DashSummaryItem
					count={admins.length}
					title={'Administrators'}
					icon={faLightbulb}
				/>
				<DashSummaryItem
					count={evaluators.length}
					title={'Evaluators'}
					icon={faLightbulb}
				/>
				<DashSummaryItem
					count={normalUsers.length}
					title={'Normal'}
					icon={faLightbulb}
				/>
				<DashSummaryItem
					count={designations.length}
					title={'Designations'}
					icon={faLightbulb}
				/>
				<DashSummaryItem
					count={employees.length}
					title={'Employees'}
					icon={faLightbulb}
				/>
				<DashSummaryItem
					count={roles.length}
					title={'Roles'}
					icon={faLightbulb}
				/>
				<DashSummaryItem
					count={tasks.length}
					title={'Tasks'}
					icon={faLightbulb}
				/>
			</div>
		</div>
	);
};

export default AdminDashboard;
