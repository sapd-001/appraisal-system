import InputElement from '../../components/InputElement';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { apiRequest } from '../../api';
import { useAppSelector } from '../../state/hooks';

import { ToastContainer, toast } from 'react-toastify';

type DepartmentFormProps = {
	name: string;
	description: string;
};
const AddAdminDepartment: React.FC<{ closeModal: () => void }> = ({
	closeModal
}) => {
	// Fullscreen modal with form
	const [departmentForm, setDepartmentForm] =
		React.useState<DepartmentFormProps>({} as DepartmentFormProps);

	const handleDepartmentFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setDepartmentForm((prev) => ({ ...prev, [name]: value }));
	};
	const { token } = useAppSelector((state) => state.root.user);
	const handleDepartmentFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {

		e.preventDefault();

		try {
			const res = await apiRequest.post(
				'/departments/create',
				departmentForm,
				{
					headers: {
						authorization: `Bearer ${token}`
					}
				}
			);

			if (res.status === 201) {
				toast.success('Department added successfully');
				setTimeout(() => {
					closeModal();
				}, 2000);
			}
		} catch (error) {
			console.log(error);

			toast.error('Something went wrong');
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
				onSubmit={handleDepartmentFormSubmit}
				className="min-w-[30rem] p-10 bg-white flex flex-col gap-4"
				onClick={(e) => e.stopPropagation()}
			>
				<h1 className="text-3xl font-bold text-center">
					Add new department
				</h1>
				<div className="flex flex-col space-y-2">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={handleDepartmentFormChange}
						value={departmentForm.name || ''}
						className="border border-gray-400 p-2 rounded-md"
						placeholder="Enter department name"
					/>
				</div>
				<InputElement
					labelText="Description"
					name="description"
					type="textarea"
					value={departmentForm.description || ''}
					onChange={handleDepartmentFormChange}
					cols={30}
					rows={5}
				/>
				<button
					className="w-full py-4 bg-blue-700 text-white rounded-md"
					type="submit"
				>
					Add Department
				</button>
			</form>
		</div>
	);
};

export default AddAdminDepartment;
