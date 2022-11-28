/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-29 01:14:55
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type EValuatorType = {
	[any: string]: any;
};

type EvaluatorStateType = {
	evaluators: EValuatorType[];
	loading: boolean;
	error: string | null;
};

const initialState: EvaluatorStateType = {
	evaluators: [],
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
			state.evaluators = action.payload;
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
