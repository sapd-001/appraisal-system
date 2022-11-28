import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import departmentsReducer from '../slices/departmentsSlice';
import designationReducer from '../slices/designationsSlice';
import employeesReducer from './../slices/employeesSlice';
import rolesReducer from '../slices/rolesSlice';
import storage from 'redux-persist/lib/storage';
import tasksReducer from '../slices/tasksSlice';
import userReducer from './../slices/userSlice';

import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist';

const persistConfig = {
	key: 'root:ba457c6b340f3aeaadde4',
	version: 1,
	storage
};

const rootReducer = persistReducer(
	persistConfig,
	combineReducers({
		user: userReducer
	})
);

const store = configureStore({
	reducer: {
		root: rootReducer,
		tasks: tasksReducer,
		roles: rolesReducer,
		designations: designationReducer,
		departments: departmentsReducer,
		employees: employeesReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
