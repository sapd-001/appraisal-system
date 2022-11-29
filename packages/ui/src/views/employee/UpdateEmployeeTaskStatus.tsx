/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import ModalComponent from '../../components/ModalComponent';
import React from 'react';
import SelectElement from '../../components/SelectElement';
import { apiRequest } from '../../api';
import { taskStatus } from '../../data/status';
import { useAppSelector } from '../../state/hooks';

import { ToastContainer, toast } from 'react-toastify';

type UpdateType = {
	status: string;
};
const UpdateEmployeeTaskStatus: React.FC<{
	task: any;
	closeModal: () => void;
}> = (props) => {
	const { token } = useAppSelector((state) => state.root.user);
	const [taskState, setTaskState] = React.useState<UpdateType>({
		status: props.task.status
	} as UpdateType);
	const handleTaskStateChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setTaskState((prev) => ({ ...prev, [name]: value }));
	};
	const handleTaskStateSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		try {
			await apiRequest.patch(
				`/tasks/update/status/${props.task._id}`,
				taskState,
				{
					headers: {
						authorization: `Bearer ${token}`
					}
				}
			);
			toast.success('Task status updated successfully');
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error) {
			if (error instanceof AxiosError)
				toast.error(error.response?.data.message);
		} finally {
			setLoading(false);
			// props.closeModal();
		}
	};
	const [loading, setLoading] = React.useState<boolean>(false);

	return (
		// <div className="fixed h-screen w-screen bg-gray-900 bg-opacity-50 flex items-center justify-center top-0 left-0 z-[2000]">
		<ModalComponent onClose={props.closeModal}>
			<ToastContainer />
			<form
				action=""
				className="min-w-30rem p-10  bg-white min-h-[25rem] max-w-[40rem] rounded w-full"
				onSubmit={handleTaskStateSubmit}
			>
				<h1 className="uppercase text-center my-10">
					Update Task Status
				</h1>
				<p className="py-2 border px-2 my-3">
					Update task{' '}
					<span className="text-green-700 underline">
						{props.task.name}
					</span>
				</p>
				<SelectElement
					label="Status"
					name="status"
					value={taskState.status}
					onChange={handleTaskStateChange}
					options={taskStatus}
					displayKey="name"
					objectKey="value"
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 my-2 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
					disabled={props.task.status === 'completed' || loading}
				>
					{props.task.status === 'completed' ? (
						<>Task already completed</>
					) : (
						<span>Update Status</span>
					)}
				</button>
			</form>
		</ModalComponent>
	);
};

export default UpdateEmployeeTaskStatus;
