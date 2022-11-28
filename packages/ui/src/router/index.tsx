/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const AppRouter = () => {
	return (
		<RouterProvider router={router} />
	);
};

export default AppRouter;
