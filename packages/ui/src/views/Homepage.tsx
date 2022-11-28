import React from 'react';
import WidthWrapper from '../wrappers/WidthWrapper';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
	const navigate = useNavigate();
	const navigateTo = (path: string) => {
		navigate(path);
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
				<form
					action=""
					className="w-full max-w-[30rem] md:max-w-[40rem] p-4 md:p-20 rounded-md shadow-md flex flex-col gap-4 bg-white"
				>
					<h1 className="text-2xl font-bold text-center my-6">
						Welcome to Astra Employee Appraisal system
					</h1>
					<div className="flex flex-col">
						<label htmlFor="email">Email address</label>
						<input
							type="text"
							className="w-full border-none outline-none bg-slate-200 rounded-md p-2 text-md"
							placeholder="Email address "
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="w-full border-none outline-none bg-slate-200 rounded-md p-2 text-md"
							placeholder="Password"
						/>
					</div>
					<div className="flex flex-row-reverse justify-end gap-2 items-center">
						<label htmlFor="remeber">Rember me</label>
						<input
							name="remember"
							type="checkbox"
							className="border-none h-4 outline-none bg-slate-200 rounded-md p-2 text-md"
							placeholder="Password"
						/>
					</div>
					<button className="w-full bg-blue-600 py-2 rounded font-bold text-lg text-white" onClick={()=>{
						navigateTo('/admin');
					}}>
						Sign in
					</button>
				</form>
			</WidthWrapper>
		</div>
	);
};

export default Homepage;
