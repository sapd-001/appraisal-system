import { AxiosError } from 'axios';
import InputElement from '../../components/InputElement';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import SelectElement from '../../components/SelectElement';
import { apiRequest } from '../../api';
import { taskStatus } from '../../data/status';
import { useAppSelector } from '../../state/hooks';

import { ToastContainer, toast } from 'react-toastify';

type tasksFormPropsTypes = {
	name: string;
	dueDate: string;
	assignedTo: string;
	status: string;
	description: string;
	evaluator: string;
	department: string;
	designation: string;
	priority: string;
};
const AddAdminTasks: React.FC<{ closeModal: () => void }> = ({
	closeModal
}) => {
	// Fullscreen modal with form
	const [tasksForm, setTasksForm] = React.useState<tasksFormPropsTypes>(
		{} as tasksFormPropsTypes
	);
	const {
		// employees: { employees },
		evaluators: { evaluators },
		designations: { designations },
		departments: { departments },
		normalUsers: { normalUsers }
	} = useAppSelector((state) => state);
	const handleTasksFormChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setTasksForm((prev) => ({ ...prev, [name]: value }));
	};
	const { token } = useAppSelector((state) => state.root.user);
	const handleTasksFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		console.log('Submit', tasksForm);

		try {
			const res = await apiRequest.post('/tasks/create', tasksForm, {
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
			if (error instanceof AxiosError) {
				console.log(error.response?.data);

				toast.error(error.response!.data.message);
			}
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

	const normalEmployees = React.useMemo(() => {
		return normalUsers.map((user) => ({
			...user,
			name: user.firstName + ' ' + user.lastName
		}));
	}, [normalUsers]);

	const evaluatorOptions = React.useMemo(() => {
		return evaluators.map((evaluator) => ({
			...evaluator,
			name: evaluator.firstName + ' ' + evaluator.lastName
		}));
	}, [evaluators]);

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
				<h1 className="text-3xl font-bold text-center">Add new Task</h1>
				<div
					className="flex gap-6
				"
				>
					<div>
						<InputElement
							name="name"
							onChange={handleTasksFormChange}
							type="text"
							value={tasksForm.name}
							labelText="Task Name"
							placeholder="Enter Task Name"
						/>
						<InputElement
							name="dueDate"
							onChange={handleTasksFormChange}
							type="datetime-local"
							value={tasksForm.dueDate}
							labelText="Due Date"
							placeholder="Enter Due Date"
						/>
						<SelectElement
							name="department"
							value={tasksForm.department}
							onChange={handleTasksFormChange}
							label="Select Department"
							options={departments}
							objectKey="_id"
							// displayKey='email'
						/>
						<SelectElement
							name="assignedTo"
							value={tasksForm.assignedTo}
							onChange={handleTasksFormChange}
							label="Select Assigneee"
							options={normalEmployees}
							objectKey="_id"
							// displayKey="email"
						/>
						<SelectElement
							name="evaluator"
							value={tasksForm.evaluator}
							onChange={handleTasksFormChange}
							label="Select Evaluator"
							options={evaluatorOptions}
							objectKey="_id"
							// displayKey="email"
						/>
					</div>
					<div>
						<SelectElement
							name="designation"
							value={tasksForm.designation}
							onChange={handleTasksFormChange}
							label="Select Designation"
							options={designations}
							objectKey="_id"
						/>
						<SelectElement
							name="priority"
							value={tasksForm.priority}
							onChange={handleTasksFormChange}
							label="Select Priority"
							options={[
								{ name: 'High', value: '1' },
								{ name: 'Medium', value: '2' },
								{ name: 'Low', value: '3' },
								{ name: 'None', value: '4' }
							]}
							objectKey="value"
						/>
						<SelectElement
							name="status"
							value={tasksForm.status}
							onChange={handleTasksFormChange}
							label="Select Status"
							options={taskStatus}
							objectKey="value"
						/>
						<InputElement
							name="description"
							onChange={handleTasksFormChange}
							type="textarea"
							value={tasksForm.description}
							labelText="Description"
							placeholder="Enter Description"
							cols={30}
							rows={8}
						/>
					</div>
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
