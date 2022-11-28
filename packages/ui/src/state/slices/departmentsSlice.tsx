/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:31:11
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type DepartmentType = {
	_id: string;
	name: string;
	description: string;
};

type DepartmentStateType = {
	departments: DepartmentType[];
	loading: boolean;
	error: string | null;
};

const initialState: DepartmentStateType = {
	departments: [],
	loading: false,
	error: null
};

const departmentSlice = createSlice({
	name: 'departments',
	initialState,
	reducers: {
		loadDepartmentStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadDepartmentSuccess: (
			state,
			action: PayloadAction<DepartmentType[]>
		) => {
			state.departments = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadDepartmentFailure: (
			state,
			action: PayloadAction<Pick<DepartmentStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const {
	loadDepartmentFailure,
	loadDepartmentStart,
	loadDepartmentSuccess
} = departmentSlice.actions;

export default departmentSlice.reducer;
