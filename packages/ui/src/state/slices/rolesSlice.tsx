/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:34:28
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type RoleType = {
	_id: string;
	name: string;
	description: string;
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
	reducers: {
		loadRoleStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadRoleSuccess: (state, action: PayloadAction<RoleType[]>) => {
			state.departments = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadRoleFailure: (
			state,
			action: PayloadAction<Pick<RoleStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadRoleFailure, loadRoleStart, loadRoleSuccess } =
	departmentSlice.actions;

export default departmentSlice.reducer;
