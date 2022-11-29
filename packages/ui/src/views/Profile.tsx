import { AxiosError } from 'axios';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import InputElement from '../components/InputElement';
import { Link } from 'react-router-dom';
import React from 'react';
import { apiRequest } from '../api';
import { loginUser } from '../state/slices/userSlice';

import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../state/hooks';

type ProfileType = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
};

const Profile = () => {
	const { user, token } = useAppSelector((state) => state.root.user);
	const [loading, setLoading] = React.useState<boolean>(false);

	const [formData, setFormData] = React.useState<ProfileType>({
		...user
	} as ProfileType);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const dispatch = useAppDispatch();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await apiRequest.put('/auth/profile/update', formData, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			const { data } = res.data;
			const {role:_,...rest} = data;

			toast.success('Profile updated successfully');
			dispatch(
				loginUser({
					token,
					user: {
						...user,
						...rest
					}
				})
			);
			console.log(data);
		} catch (error) {
			if (error instanceof AxiosError)
				toast.error(error.response?.data.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex justify-center items-center flex-col gap-5 min-h-screen">
			<h1>Profile</h1>
			<ToastContainer />
			<p className="w-fit border px-4 rounded-md">{user?.role}</p>
			<form
				action=""
				onSubmit={handleSubmit}
				className="p-10 min-h-[30rem] min-w-[30rem] bg-white border flex flex-col gap-3"
			>
				<InputElement
					name="firstName"
					value={formData.firstName!}
					onChange={handleInputChange}
					labelText="First Name"
					type="text"
				/>
				<InputElement
					name="lastName"
					value={formData.lastName!}
					onChange={handleInputChange}
					labelText="Last Name"
					type="text"
				/>
				<InputElement
					name="phone"
					value={formData.phone!}
					onChange={handleInputChange}
					labelText="Phone number"
					type="tel"
					placeholder="+234 000 000 0000"
				/>
				<InputElement
					name="email"
					value={formData.email!}
					onChange={handleInputChange}
					labelText="Email address"
					type="email"
				/>

				<button
					type="submit"
					className="bg-blue-700 text-white py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={loading}
				>
					Update profile
				</button>
			</form>

			<Link
				to={`/${user!.role}/dashboard`}
				className="p-2 text-blue-600 underline border"
			>
				Back to dashboard
			</Link>
		</div>
	);
};

export default Profile;
