/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:51:43
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type EmployeeType = {
	[any: string]: any;
};

type EmployeeStateType = {
	employees: EmployeeType[];
	loading: boolean;
	error: string | null;
};

const initialState: EmployeeStateType = {
	employees: [],
	loading: false,
	error: null
};

const departmentSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		loadEmployeeStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadEmployeeSuccess: (state, action: PayloadAction<EmployeeType[]>) => {
			state.employees = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadEmployeeFailure: (
			state,
			action: PayloadAction<Pick<EmployeeStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadEmployeeFailure, loadEmployeeStart, loadEmployeeSuccess } =
	departmentSlice.actions;

export default departmentSlice.reducer;
