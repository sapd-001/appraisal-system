import Protected from './Protected';
import React from 'react';
import { useAppSelector } from '../state/hooks';

import { Navigate, useLocation } from 'react-router-dom';

type ProtectedProps = {
	children: JSX.Element;
};
const AdminProtected = ({ children }: ProtectedProps) => {
	const { user } = useAppSelector((state) => state.root.user);
	const location = useLocation();

	return user?.role === 'evaluator' ? (
		<Protected>{children}</Protected>
	) : (
		<Navigate to={'/'} state={{ from: location.pathname }} />
	);
};

export default AdminProtected;
