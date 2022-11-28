/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { apiRequest } from '../../api';
import { useAppSelector } from '../../state/hooks';

import { AxiosError } from 'axios';
import InputElement from '../../components/InputElement';
import { ToastContainer, toast } from 'react-toastify';

type TasksFormProps = {
	name: string;
	dueDate: Date;
	assignedTo: string;
	status: string;
	employees: string;
};
const AddAdminTasks: React.FC<{ closeModal: () => void }> = ({
	closeModal
}) => {
	// Fullscreen modal with form
	const [TasksForm, setTasksForm] = React.useState<TasksFormProps>(
		{} as TasksFormProps
	);
	const { employees } = useAppSelector((state) => state.employees);
	const handleTasksFormChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		console.log(name, value);
		setTasksForm((prev) => ({ ...prev, [name]: value }));
	};
	const { token } = useAppSelector((state) => state.root.user);
	const handleTasksFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		console.log('Submitting form');

		e.preventDefault();

		try {
			const res = await apiRequest.post('/tasks/create', TasksForm, {
				headers: {
					authorization: `Bearer ${token}`
				}
			});

			if (res.status === 201) {
				toast.success('Task added successfully');
				setTimeout(() => {
					closeModal();
				}, 2000);
			}
		} catch (error) {
			if (error instanceof AxiosError)
				toast.error(error.response!.data.message);
		}
	};
	const wrapperRef = React.useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			wrapperRef.current &&
			!wrapperRef.current.contains(event.target as Node)
		)
			closeModal();
	};
	const handleEscapeClose = (event: KeyboardEvent) => {
		if (event.key === 'Escape') closeModal();
	};
	window.addEventListener('keydown', handleEscapeClose);
	// window.addEventListener('click', handleClickOutside);
	wrapperRef.current &&
		wrapperRef.current.addEventListener('mousedown', handleClickOutside);

	React.useEffect(() => {
		return () => {
			wrapperRef.current &&
				wrapperRef.current.removeEventListener(
					'mousedown',
					handleClickOutside
				);
			window.removeEventListener('keydown', handleEscapeClose);
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		// Add fullscreen modal with form
		<div
			className="flex flex-col space-y-2 h-screen fixed justify-center items-center bg-gray-600 z-[2000] w-full top-0 bg-opacity-60"
			ref={wrapperRef}
		>
			<ToastContainer />
			<form
				action=""
				onSubmit={handleTasksFormSubmit}
				className="min-w-[30rem] p-10 bg-white flex flex-col gap-4"
				onClick={(e) => e.stopPropagation()}
			>
				<h1 className="text-3xl font-bold text-center">
					Add new Task
				</h1>
				<InputElement
					name="name"
					onChange={handleTasksFormChange}
					type="text"
					value={TasksForm.name}
					labelText="Task Name"
					placeholder="Enter Task Name"
				/>
				<InputElement
					name="dueDate"
					onChange={handleTasksFormChange}
					type="Date"
					value={TasksForm.dueDate}
					labelText="Due Date"
					placeholder="Enter Due Date"
				/>
				<div>
					<label htmlFor="department">Assigned To: </label>
					<select
						name="department"
						value={TasksForm.employees}
						onChange={handleTasksFormChange}
					>
						<option value="" disabled>
							Select Employee
						</option>
						{employees.length &&
							employees.map((employee) => (
								<option key={employee._id} value={employee._id}>
									{employee.firstName}
								</option>
							))}
					</select>
				</div>
				<div>
					<label htmlFor="department">Status: </label>
					<select name="status" onChange={handleTasksFormChange}>
						<option value="" disabled>
							Select Status
						</option>
						<option value="Done">Done</option>
						<option value="Pending">Pending</option>
						<option value="Overdue">Overdue</option>
					</select>
				</div>
				<button
					className="w-full py-4 bg-blue-700 text-white rounded-md"
					type="submit"
				>
					Add Task
				</button>
			</form>
		</div>
	);
};

export default AddAdminTasks;
