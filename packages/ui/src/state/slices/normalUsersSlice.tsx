/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-29 01:58:59
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type NormaluserType = {
	[any: string]: any;
};

type NormalUserStateType = {
	normalUsers: NormaluserType[];
	loading: boolean;
	error: string | null;
};

const initialState: NormalUserStateType = {
	normalUsers: [],
	loading: false,
	error: null
};

const normalUserSlice = createSlice({
	name: 'normal-users',
	initialState,
	reducers: {
		loadNormalUserStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadNormalUserSuccess: (
			state,
			action: PayloadAction<NormaluserType[]>
		) => {
			state.normalUsers = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadNormalUserFailure: (
			state,
			action: PayloadAction<Pick<NormalUserStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const {
	loadNormalUserFailure,
	loadNormalUserStart,
	loadNormalUserSuccess
} = normalUserSlice.actions;

export default normalUserSlice.reducer;
