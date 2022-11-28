import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../state/hooks';
import { useLocation } from 'react-router-dom';

type ProtectedProps = {
	children: JSX.Element;
};
const Protected = ({ children }: ProtectedProps) => {
	const { isAuthenticated } = useAppSelector((state) => state.root.user);
	const location = useLocation();

	return isAuthenticated ? (
		children
	) : (
		<Navigate to={'/'} state={{ from: location.pathname }} />
	);
};

export default Protected;
