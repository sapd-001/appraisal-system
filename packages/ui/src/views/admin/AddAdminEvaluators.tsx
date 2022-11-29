import { AxiosError } from 'axios';
import FullScreenLoader from '../../components/FullScreenLoader';
import InputElement from '../../components/InputElement';
import ModalComponent from '../../components/ModalComponent';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import SelectElement from '../../components/SelectElement';
import { apiRequest } from '../../api';
import { useAppSelector } from '../../state/hooks';

import { ToastContainer, toast } from 'react-toastify';

type EvaluatorsFormProps = {
	firstName: string;
	lastName: string;
	email: string;
	department: string;
	designation: string;
};
const AddAdminEvaluators: React.FC<{ closeModal: () => void }> = ({
	closeModal
}) => {
	// Fullscreen modal with form
	const [evaluatorsForm, setEvaluatorsForm] =
		React.useState<EvaluatorsFormProps>({} as EvaluatorsFormProps);
	const { departments } = useAppSelector((state) => state.departments);
	const { designations } = useAppSelector((state) => state.designations);
	const handleEvaluatorsFormChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setEvaluatorsForm((prev) => ({ ...prev, [name]: value }));
	};
	const { token } = useAppSelector((state) => state.root.user);
	const handleEvaluatorsFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await apiRequest.post(
				'/users/create/evaluator',
				evaluatorsForm,
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
					window.location.reload();
				}, 2000);
			}
		} catch (error) {
			if (error instanceof AxiosError)
				toast.error(error.response!.data.message);
		} finally {
			setLoading(false);
		}
	};
	const designationOptions = React.useMemo(() => {
		const opts = designations
			.slice()
			.filter((d) => d.department === evaluatorsForm.department);

		return opts.sort((a, b) => a.name.localeCompare(b.name));
	}, [designations, evaluatorsForm.department]);

	const [loading, setLoading] = React.useState<boolean>(false);

	return (
		// Add fullscreen modal with form
		<ModalComponent onClose={closeModal}>
			<ToastContainer />
			{loading ? (
				<FullScreenLoader />
			) : (
				<form
					action=""
					onSubmit={handleEvaluatorsFormSubmit}
					className="min-w-[30rem] p-10 bg-white flex flex-col gap-4"
					onClick={(e) => e.stopPropagation()}
				>
					<h1 className="text-3xl font-bold text-center">
						Add new Evaluator
					</h1>
					<InputElement
						name="firstName"
						onChange={handleEvaluatorsFormChange}
						type="text"
						value={evaluatorsForm.firstName}
						labelText="First Name"
						placeholder="Enter First Name"
					/>
					<InputElement
						name="lastName"
						onChange={handleEvaluatorsFormChange}
						type="text"
						value={evaluatorsForm.lastName}
						labelText="Last Name"
						placeholder="Enter Last Name"
					/>
					<InputElement
						name="email"
						onChange={handleEvaluatorsFormChange}
						type="text"
						value={evaluatorsForm.email}
						labelText="Email"
						placeholder="Enter Email"
					/>
					<SelectElement
						name="department"
						value={evaluatorsForm.department}
						onChange={handleEvaluatorsFormChange}
						options={departments}
						label={'Deparement'}
						objectKey={'_id'}
					/>
					{evaluatorsForm.department && (
						<SelectElement
							name="designation"
							value={evaluatorsForm.designation}
							onChange={handleEvaluatorsFormChange}
							options={designationOptions}
							label={'Designation'}
							objectKey={'_id'}
						/>
					)}
					<button
						className="w-full py-4 bg-blue-700 text-white rounded-md"
						type="submit"
					>
						Add Evaluator
					</button>
				</form>
			)}
		</ModalComponent>
	);
};

export default AddAdminEvaluators;
