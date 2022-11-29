import React from 'react';
import { useAppSelector } from '../../state/hooks';

import Table, { TableColumnProps } from '../../components/Table';

const cols: TableColumnProps[] = [
	// id,name,email,designation,phone,actions
	{
		columnName: '_id',
		id: 1,
		title: 'UID',
		customElement: false
	},
	{
		columnName: 'name',
		id: 2,
		title: 'Name',
		customElement: true,
		element: ({ data }) => <div>{`${data.firstName} ${data.lastName}`}</div>
	},
	{
		columnName: 'email',
		id: 3,
		title: 'Email',
		customElement: false
	},
	{
		columnName: 'designation',
		id: 4,
		title: 'Designation',
		customElement: false
	},
	{
		columnName: 'phone',
		id: 5,
		title: 'Phone',
		customElement: false
	},
	{
		columnName: 'actions',
		id: 6,
		title: 'Actions',
		customElement: true,
		element: () => {
			return (
				<div className="flex space-x-2">
					<button className="bg-blue-500 text-white px-2 py-1 rounded">
						Edit
					</button>
				</div>
			);
		}
	}
];

const AdminUsers = () => {
	const { normalUsers } = useAppSelector((state) => state.normalUsers);
	const employees = React.useMemo(() => {
		return [...normalUsers];
	}, [normalUsers]);

	return (
		<div>
			<h1>Users</h1>
			<div>
				<Table columns={cols} rows={employees} />
			</div>
		</div>
	);
};

export default AdminUsers;
