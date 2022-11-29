/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AxiosError } from 'axios';
import InputElement from '../components/InputElement';
import { Link } from 'react-router-dom';
import React from 'react';
import { RoleType } from '../types';
import WidthWrapper from '../wrappers/WidthWrapper';
import { apiRequest } from '../api';
import { loginUser } from '../state/slices/userSlice';

import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../state/hooks';

type LoginProps = {
	email: string;
	password: string;
};

const Homepage = () => {
	const dispatch = useAppDispatch();
	const generateDashboardLink = (path: RoleType) => {
		return `/${path}/dashboard`;
	};

	const [formData, setFormData] = React.useState<LoginProps>(
		{} as LoginProps
	);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const { isAuthenticated, user } = useAppSelector(
		(state) => state.root.user
	);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await apiRequest.post('/auth/login', formData);
			const token = response.data.data.token;
			const res = await apiRequest.get('/auth/profile', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			toast.success('Login successful');
			setTimeout(() => {
				dispatch(loginUser({ token, user: res.data.data }));
			}, 2000);
		} catch (error) {
			if (error instanceof AxiosError) {
				const { data } = error.response!;
				toast.error(data.message);
			}
		}
	};

	return (
		<div
			className="flex items-center justify-center h-screen flex-col gap-10 relative bg-cover bg-no-repeat bg-center"
			style={{
				backgroundImage:
					'url(https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
			}}
		>
			{/* <img src={bg} alt="" className="absolute w-full h-full -z-[1]" /> */}
			<WidthWrapper>
				<>
					{isAuthenticated ? (
						<div className="min-h-[20rem] min-w-[30rem] items-center bg-white py-10 px-4 shadow-sm rounded flex justify-center flex-col">
							<h1 className="text-xl font-bold text-black border p-3">
								Welcome back, {user?.email}
							</h1>
							<div className="flex gap-4 mt-4 justify-center">
								<button className="bg-blue-600 px-4 py-2 rounded-md text-white">
									<Link
										to={generateDashboardLink(user!.role)}
									>
										Continue to dashboard
									</Link>
								</button>

								<button className="bg-blue-700 text-white px-4 py-2 rounded-md">
									<Link to="/account/profile">
										Explore profile
									</Link>
								</button>
							</div>
						</div>
					) : (
						<form
							action=""
							className="w-full max-w-[30rem] md:max-w-[40rem] p-4 md:p-20 rounded-md shadow-md flex flex-col gap-4 bg-white"
							onSubmit={handleSubmit}
						>
							<ToastContainer />
							<h1 className="text-2xl font-bold text-center my-6">
								Welcome to Astra Employee Appraisal system
							</h1>
							<InputElement
								type="email"
								name="email"
								labelText="Email address"
								onChange={handleChange}
								value={formData.email}
							/>
							<InputElement
								onChange={handleChange}
								type="password"
								name="password"
								placeholder="Password"
								value={formData.password}
								labelText="Password"
							/>

							<button
								className="w-full bg-blue-600 py-2 rounded font-bold text-lg text-white"
								type="submit"
							>
								Sign in
							</button>
						</form>
					)}
				</>
			</WidthWrapper>
		</div>
	);
};

export default Homepage;
