/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 16:27:10
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserStateType } from '../../types';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserStateType = {
	isAuthenticated: false,
	user: null,
	loading: false,
	error: null,
	token: ''
};

type PickPayload = 'user' | 'token';

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (
			state,
			action: PayloadAction<Pick<UserStateType, PickPayload>>
		) => {
			state.isAuthenticated = true;
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		logoutUser: (state) => {
			state.isAuthenticated = initialState.isAuthenticated;
			state.user = initialState.user;
		}
	}
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
