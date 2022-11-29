export type StatusTypes = {
	name: string;
	value:
		| 'completed'
		| 'rejected'
		| 'warning'
		| 'info'
		| 'pending'
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
