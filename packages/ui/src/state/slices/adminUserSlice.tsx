/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-29 01:56:30
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AdminType = {
	[any: string]: any;
};

type AdminStateType = {
	admins: AdminType[];
	loading: boolean;
	error: string | null;
};

const initialState: AdminStateType = {
	admins: [],
	loading: false,
	error: null
};

const adminSlice = createSlice({
	name: 'admins',
	initialState,
	reducers: {
		loadAdminStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadAdminSuccess: (state, action: PayloadAction<AdminType[]>) => {
			state.admins = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadAdminFailure: (
			state,
			action: PayloadAction<Pick<AdminStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadAdminFailure, loadAdminStart, loadAdminSuccess } =
	adminSlice.actions;

export default adminSlice.reducer;
