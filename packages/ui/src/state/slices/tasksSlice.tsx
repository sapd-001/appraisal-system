/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:29:09
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TaskType = {
	_id: string;
	name: string;
	description: string;
	status: string;
	priority: string;
	assignedTo: string;
	assignedBy: string;
	department: string;
	designation: string;
	evaluator: string;
};

type TasksState = {
	tasks: TaskType[];
	loading: boolean;
	error: string | null;
};
const initialState: TasksState = {
	tasks: [],
	loading: false,
	error: null
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		loadTaskStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadTaskSuccess: (state, action: PayloadAction<TaskType[]>) => {
			state.tasks = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadTaskFailure: (
			state,
			action: PayloadAction<Pick<TasksState, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadTaskFailure, loadTaskStart, loadTaskSuccess } =
	tasksSlice.actions;

export default tasksSlice.reducer;
