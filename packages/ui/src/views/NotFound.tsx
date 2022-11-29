import React from 'react';
import { logoutUser } from '../state/slices/userSlice';
import { useAppDispatch } from '../state/hooks';

import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<div className="flex flex-col min-h-screen justify-center items-center gap-4">
			<h1>404</h1>
			<p>
				Page not found go back to{' '}
				<Link to="/" className="text-blue-600 underline capitalize">
					homepage
				</Link>
			</p>
			<div>
				<span>If problem persists login</span>
				<button
					onClick={() => {
						dispatch(logoutUser());
						navigate('/');
					}}
					className="bg-red-300 text-black px-6 py-1 ml-2 rounded"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default NotFound;
