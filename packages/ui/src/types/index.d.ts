import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type NavLinkType = {
	pathName: string;
	urlPath: string;
	icon?: IconDefinition;
};

export type LinksType = { [x: string]: NavLinkType[] };
