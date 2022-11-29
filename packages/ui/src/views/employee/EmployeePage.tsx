/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AxiosError } from 'axios';
import EmployeeLayout from '../../layouts/EmployeeLayout';
import React from 'react';
import { apiRequest } from '../../api';
import { loadTaskSuccess } from '../../state/slices/tasksSlice';
import { toast } from 'react-toastify';

import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../state/hooks';

const EmployeePage = () => {
	const path = useLocation().pathname;

	const dispatch = useAppDispatch();
	const { token } = useAppSelector((state) => state.root.user);

	const fetchUserTasks = async () => {
		try {
			const res = await apiRequest.get('/tasks/user/assigned', {
				headers: {
					authorization: `Bearer ${token}`
				}
			});
			const data = res.data.data;
			dispatch(loadTaskSuccess(data));
		} catch (error) {
			if (error instanceof AxiosError) {
				const { data } = error.response!;
				toast.error(data.message);
			}
		}
	};
	React.useEffect(() => {
		Promise.all([fetchUserTasks()]);
	}, [path]);
    
	return (
		<EmployeeLayout>
			<Outlet />
		</EmployeeLayout>
	);
};

export default EmployeePage;
