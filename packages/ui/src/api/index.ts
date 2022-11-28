/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1';

export const apiRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});
