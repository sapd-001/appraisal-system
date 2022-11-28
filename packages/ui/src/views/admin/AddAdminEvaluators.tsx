/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { apiRequest } from '../../api';
import { useAppSelector } from '../../state/hooks';

import { ToastContainer, toast } from 'react-toastify';
import InputElement from '../../components/InputElement';
import { AxiosError } from 'axios';

type EvaluatorFormProps = {
	name: string;
	description: string;
	department: string;
};
const AddAdminEvaluators: React.FC<{ closeModal: () => void }> = ({
	closeModal
}) => {
	// Fullscreen modal with form
	const [evaluatorForm, setEvaluatorForm] =
		React.useState<EvaluatorFormProps>({} as EvaluatorFormProps);
	const { departments } = useAppSelector((state) => state.departments);
	const handleEvaluatorFormChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		console.log(name, value);
		setEvaluatorForm((prev) => ({ ...prev, [name]: value }));
	};
	const { token } = useAppSelector((state) => state.root.user);
	const handleEvaluatorFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		console.log('Submitting form');

		e.preventDefault();

		try {
			const res = await apiRequest.post(
				'/evaluators/create',
				evaluatorForm,
				{
					headers: {
						authorization: `Bearer ${token}`
					}
				}
			);

			if (res.status === 201) {
				toast.success('Evaluator added successfully');
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
				onSubmit={handleEvaluatorFormSubmit}
				className="min-w-[30rem] p-10 bg-white flex flex-col gap-4"
				onClick={(e) => e.stopPropagation()}
			>
				<h1 className="text-3xl font-bold text-center">
					Add new Evaluator
				</h1>
				<InputElement
					name="name"
					onChange={handleEvaluatorFormChange}
					type="text"
					value={evaluatorForm.name}
					labelText="Name"
					placeholder="Enter Evaluator Name"
				/>
				<div>
					<select
						name="department"
						value={evaluatorForm.department}
						onChange={handleEvaluatorFormChange}
					>
						<option value="" disabled>
							Select Department
						</option>
						{departments.length &&
							departments.map((department) => (
								<option
									key={department._id}
									value={department._id}
								>
									{department.name}
								</option>
							))}
					</select>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="description">Description</label>
					<textarea
						name="description"
						id="description"
						cols={30}
						rows={10}
						onChange={handleEvaluatorFormChange}
						value={evaluatorForm.description}
						className="border border-gray-400 p-2 rounded-md"
						placeholder="Enter department description"
					/>
				</div>
				<button
					className="w-full py-4 bg-blue-700 text-white rounded-md"
					type="submit"
				>
					Add Evaluator
				</button>
			</form>
		</div>
	);
};

export default AddAdminEvaluators;
