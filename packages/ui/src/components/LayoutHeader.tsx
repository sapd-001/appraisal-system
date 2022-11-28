import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profile from './../assets/profile.png';
import { useAppSelector } from '../state/hooks';

import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LayoutHeader = () => {
	const { user } = useAppSelector((state) => state.root.user);
	
	return (
		<div className="px-6 py-4 bg-blue-600 w-full text-white flex justify-between items-center sticky top-0">
			<div className="flex items-center gap-3">
				<FontAwesomeIcon icon={faBars} className="font-bold text-3xl" />
				<h2 className="font-bold text-lg">Eavluation system</h2>
			</div>
			<div className="flex items-center gap-2">
				<img src={profile} alt="" className="h-10 w-10 rounded-full" />
				<div>
					<button className="text-xl">
						{user?.role} <FontAwesomeIcon icon={faChevronDown} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default LayoutHeader;
