import PerformanceBadge from '../../components/PerformanceBadge';
import React from 'react';
import Table, { TableColumnProps } from '../../components/Table';
const rows = [
	{
		id: 1,
		task: 'Appointments',
		employee: 'Jane Doe',
		evaluator: 'Jane Smith',
		performance: 20
	},
	{
		id: 2,
		task: 'Guest orientation',
		employee: 'Ken Wanjau',
		evaluator: 'Saalome Nina',
		performance: 89.5
	},
	{
		id: 3,
		task: 'Appointments',
		employee: 'Jane Doe',
		evaluator: 'Jane Smith',
		performance: 60
	},
	{
		id: 4,
		task: 'Room booking',
		employee: 'Jane Kyla',
		evaluator: 'Jane Smith',
		performance: 40
	},
	{
		id: 5,
		task: 'Accessory management',
		employee: 'Mary Hyu',
		evaluator: 'Gabriel Fauna',
		performance: 90
	},
	{
		id: 6,
		task: 'Stock purchase',
		employee: 'Sansone Dev',
		evaluator: 'Gabriel Fauna',
		performance: -12
	}
];
const cols: TableColumnProps[] = [
	{
		columnName: 'id',
		id: 1,
		title: '#',
		customElement: false
	},

	{
		columnName: 'task',
		id: 2,
		title: 'Task',
		customElement: false
	},
	{
		columnName: 'employee',
		id: 3,
		title: 'Employee',
		customElement: false
	},
	{
		columnName: 'evaluator',
		id: 4,
		title: 'evaluator',
		customElement: false
	},
	{
		columnName: 'performance',
		id: 5,
		title: 'Performance',
		customElement: true,
		element: ({ data }) => <PerformanceBadge value={data.performance} />
	},
	{
		columnName: '',
		id: 6,
		title: 'Actions',
		customElement: true,
		element: () => {
			return (
				<div className="flex gap-2">
					<button className="bg-orange-300 text-orange-800 rounded-3xl px-3">
						View
					</button>
					<button className="bg-blue-800 text-white rounded-3xl px-3">
						Edit
					</button>
				</div>
			);
		}
	}
];

const AdminEvaluations = () => {
	return (
		<div>
			<div className="px-4 py-6 border my-4 mx-2 shadow">
				<h1 className="text-3xl font-bold">Employee evaluations</h1>
			</div>
			<div>
				<Table columns={cols} rows={rows} />
			</div>
		</div>
	);
};

export default AdminEvaluations;
