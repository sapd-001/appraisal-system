/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type NavLinkType = {
	pathName: string;
	urlPath: string;
	icon?: IconDefinition;
};

export type RoleType = 'admin' | 'user' | 'evaluator';

export type UserStateType = {
	token: string;
	isAuthenticated: boolean;
	loading: boolean;
	error: any;
	user: null | {
		_id?: string;
		firstName?: string;
		lastName?: string;
		email: string;
		role: RoleType;
		phone?: string;
		avatar?: string;
	};
};

export type LinksType = { [x: string]: NavLinkType[] };
