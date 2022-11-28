/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 19:24:50
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type EValuatorType = {
	[any: string]: any;
};

type EvaluatorStateType = {
	employees: EValuatorType[];
	loading: boolean;
	error: string | null;
};

const initialState: EvaluatorStateType = {
	employees: [],
	loading: false,
	error: null
};

const departmentSlice = createSlice({
	name: 'evaluators',
	initialState,
	reducers: {
		loadEvaluatorStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadEvaluatorSuccess: (state, action: PayloadAction<EValuatorType[]>) => {
			state.employees = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadEvaluatorFailure: (
			state,
			action: PayloadAction<Pick<EvaluatorStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadEvaluatorFailure, loadEvaluatorStart, loadEvaluatorSuccess } =
	departmentSlice.actions;

export default departmentSlice.reducer;