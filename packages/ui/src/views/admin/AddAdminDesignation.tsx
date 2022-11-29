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

type DesignationFormProps = {
	name: string;
	description: string;
	department: string;
};
const AddAdminDesignation: React.FC<{ closeModal: () => void }> = ({
	closeModal
}) => {
	// Fullscreen modal with form
	const [designationForm, setDesignationForm] =
		React.useState<DesignationFormProps>({} as DesignationFormProps);
	const { departments } = useAppSelector((state) => state.departments);
	const handleDesignationFormChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setDesignationForm((prev) => ({ ...prev, [name]: value }));
	};
	const { token } = useAppSelector((state) => state.root.user);
	const handleDesignationFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await apiRequest.post(
				'/designations/create',
				designationForm,
				{
					headers: {
						authorization: `Bearer ${token}`
					}
				}
			);

			if (res.status === 201) {
				toast.success('Designation added successfully');
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
					onSubmit={handleDesignationFormSubmit}
					className="min-w-[30rem] p-10 bg-white flex flex-col gap-4"
					onClick={(e) => e.stopPropagation()}
				>
					<h1 className="text-3xl font-bold text-center">
						Add new designation
					</h1>
					<InputElement
						name="name"
						onChange={handleDesignationFormChange}
						type="text"
						value={designationForm.name}
						labelText="Name"
						placeholder="Enter Designation Name"
					/>

					<SelectElement
						label={'Department'}
						options={departments}
						name="department"
						value={designationForm.department}
						onChange={handleDesignationFormChange}
						objectKey="_id"
					/>
					<InputElement
						name="description"
						cols={10}
						rows={5}
						onChange={handleDesignationFormChange}
						value={designationForm.description}
						placeholder="Enter department description"
						type="textarea"
					/>
					<button
						className="w-full py-4 bg-blue-700 text-white rounded-md"
						type="submit"
						disabled={loading}
					>
						Add Designation
					</button>
				</form>
			)}
		</ModalComponent>
	);
};

export default AddAdminDesignation;
