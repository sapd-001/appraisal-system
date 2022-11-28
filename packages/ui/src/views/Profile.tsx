import { Link } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../state/hooks';

const Profile = () => {
	const { user } = useAppSelector((state) => state.root.user);

	return (
		<div>
			<h1>Profile</h1>
			<p>{user?.role}</p>
			<p>{user?.email}</p>
			<button>Update Profile</button>
			<Link to={'/'}>Back to dashboard</Link>
		</div>
	);
};

export default Profile;
