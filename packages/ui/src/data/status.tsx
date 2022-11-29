export type StatusTypes = {
	name: string;
	value:
		| 'completed'
		| 'error'
		| 'warning'
		| 'info'
		| 'pending'
		| 'processing'
		| 'default'
		| 'unknown'
		| 'custom'
		| 'overdue'
		| 'notStarted'
		| 'inProgress';
};

export const taskStatus: StatusTypes[] = [
	{
		name: 'Done',
		value: 'completed'
	},
	{
		name: 'Error',
		value: 'error'
	},
	{
		name: 'Warning',
		value: 'warning'
	},
	{
		name: 'Info',
		value: 'info'
	},
	{
		name: 'Pending',
		value: 'pending'
	},
	{
		name: 'Processing',
		value: 'processing'
	},
	{
		name: 'Default',
		value: 'default'
	},
	{
		name: 'Unknown',
		value: 'unknown'
	},
	{
		name: 'Custom',
		value: 'custom'
	},
	{
		name: 'Overdue',
		value: 'overdue'
	},
	{
		name: 'Not Started',
		value: 'notStarted'
	},
	{
		name: 'In Progress',
		value: 'inProgress'
	}
];
