/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:33:09
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type DesignationType = {
	_id: string;
	name: string;
	description: string;
	department: string;
};

type DesignationStateType = {
	designations: DesignationType[];
	loading: boolean;
	error: string | null;
};

const initialState: DesignationStateType = {
	designations: [],
	loading: false,
	error: null
};

const departmentSlice = createSlice({
	name: 'designation',
	initialState,
	reducers: {
		loadDesignationStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadDesignationSuccess: (
			state,
			action: PayloadAction<DesignationType[]>
		) => {
			state.designations = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadDesignationFailure: (
			state,
			action: PayloadAction<Pick<DesignationStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const {
	loadDesignationFailure,
	loadDesignationStart,
	loadDesignationSuccess
} = departmentSlice.actions;

export default departmentSlice.reducer;
