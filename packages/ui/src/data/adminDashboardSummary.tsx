import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';

type SummaryType = {
	count: number;
	title: string;
	icon: IconDefinition;
};

const dashboardSummary: SummaryType[] = [
	{
		count: 2,
		icon: faTasks,
		title: 'Total departments'
	},
	{
		count: 4,
		icon: faTasks,
		title: 'Total Designations'
	},
	{
		count: 3,
		icon: faUsers,
		title: 'Total Users'
	},
	{
		count: 3,
		icon: faTasks,
		title: 'Total Employees'
	},
	{
		count: 1,
		icon: faTasks,
		title: 'Total Evaluator'
	},
	{
		count: 4,
		icon: faTasks,
		title: 'Total Tasks'
	}
];

export default dashboardSummary;
