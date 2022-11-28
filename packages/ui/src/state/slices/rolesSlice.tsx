/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 16:46:58
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type RoleType = {
	id: string;
	name: string;
	[other: string]: any;
};

type RoleStateType = {
	departments: RoleType[];
	loading: boolean;
	error: string | null;
};

const initialState: RoleStateType = {
	departments: [],
	loading: false,
	error: null
};

const departmentSlice = createSlice({
	name: 'roles',
	initialState,
	reducers: {}
});

// export const {} = departmentSlice.actions;

export default departmentSlice.reducer;
