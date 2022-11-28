import React from 'react';

type StatusType =
	| 'pending'
	| 'overdue'
	| 'cancelled'
	| 'completed'
	| 'progress'
	| 'review'
	| 'done';

type StatusPropsType = {
	status: StatusType;

	name: string;
};

const StatusBadge = (props: StatusPropsType) => {
	const name = props.name.toLowerCase();
	const status = props.status.toLowerCase() as unknown as StatusType;
	

	return status === 'pending' ? (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-yellow-300 text-yellow-900 border-yellow-500">
			{name}
		</span>
	) : status === 'progress' ? (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-orange-300 text-orange-900 border-blue-600">
			{name}
		</span>
	) : status === 'cancelled' ? (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-red-400 text-white border-red-400">
			{name}
		</span>
	) : status === 'completed' ? (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-green-300 text-green-900">
			{name}
		</span>
	) : status === 'done' ? (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-green-300 text-green-900">
			{name}
		</span>
	) : status === 'overdue' ? (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-red-300 text-red-900">
			{name}
		</span>
	) : status === 'review' ? (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-cyan-300 text-cyan-900">
			{name}
		</span>
	) : (
		<span className="border rounded-full text-[12px] uppercase px-3 py-1 bg-blue-300 text-blue-900">
			{name}
		</span>
	);
};

export default StatusBadge;
