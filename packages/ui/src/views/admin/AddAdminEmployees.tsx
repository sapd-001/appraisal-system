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

type EmployeesFormProps = {
	firstName: string;
	lastName: string;
	email: string;
	department: string;
	designation: string;
};
const AddAdminEmployees: React.FC<{ closeModal: () => void }> = ({
	closeModal
}) => {
	// Fullscreen modal with form
	const [employeesForm, setEmployeesForm] =
		React.useState<EmployeesFormProps>({} as EmployeesFormProps);
	const { departments } = useAppSelector((state) => state.departments);
	const { designations } = useAppSelector((state) => state.designations);
	const handleEmployeesFormChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setEmployeesForm((prev) => ({ ...prev, [name]: value }));
	};
	const { token } = useAppSelector((state) => state.root.user);
	const handleEmployeesFormSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		setLoading(true);

		try {
			await apiRequest.post('/users/create/employee', employeesForm, {
				headers: {
					authorization: `Bearer ${token}`
				}
			});

			toast.success('Employee added successfully');
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		} catch (error) {
			if (error instanceof AxiosError)
				toast.error(error.response!.data.message);
		} finally {
			setLoading(false);
		}
	};

	const designationOptions = React.useMemo(() => {
		const designats = designations
			.slice()
			.filter((desig) => desig.department === employeesForm.department);

		return designats;
	}, [designations, employeesForm.department]);
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
					onSubmit={handleEmployeesFormSubmit}
					className="min-w-[30rem] p-10 bg-white flex flex-col gap-4"
					onClick={(e) => e.stopPropagation()}
				>
					<h1 className="text-3xl font-bold text-center">
						Add new employee
					</h1>
					<InputElement
						name="firstName"
						onChange={handleEmployeesFormChange}
						type="text"
						value={employeesForm.firstName}
						labelText="First Name"
						placeholder="Enter First Name"
					/>
					<InputElement
						name="lastName"
						onChange={handleEmployeesFormChange}
						type="text"
						value={employeesForm.lastName}
						labelText="Last Name"
						placeholder="Enter Last Name"
					/>
					<InputElement
						name="email"
						onChange={handleEmployeesFormChange}
						type="text"
						value={employeesForm.email}
						labelText="Email"
						placeholder="Enter Email"
					/>
					<SelectElement
						name="department"
						value={employeesForm.department}
						onChange={handleEmployeesFormChange}
						label="Department"
						options={departments}
						objectKey="_id"
					/>

					{employeesForm.department !== '' && (
						<SelectElement
							name="designation"
							value={employeesForm.designation}
							onChange={handleEmployeesFormChange}
							options={designationOptions.sort((a, b) =>
								a.name.localeCompare(b.name)
							)}
							objectKey="_id"
							label="Designation"
						/>
					)}

					<button
						className="w-full py-4 bg-blue-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
						type="submit"
						disabled={loading}
					>
						{loading ? 'Loading...' : 'Add Employee'}
					</button>
				</form>
			)}
		</ModalComponent>
	);
};

export default AddAdminEmployees;
