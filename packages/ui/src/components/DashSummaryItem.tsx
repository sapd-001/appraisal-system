import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

const DashSummaryItem: React.FC<{
	title: string;
	count: number;
	icon: IconDefinition;
}> = ({count,icon,title}) => {
	return (
		<div
			key={title}
			className="flex items-center gap-4 border border-slate-400 justify-between p-10 shadow-[14px_-6px_62px_-4px_rgba(199,199,199,1),14px_-6px_62px_-4px_rgba(199,199,199,1)] rounded-md hover:scale-105 transition-all ease-linear duration-700 cursor-pointer"
		>
			<div className="flex flex-col gap-4">
				<h2 className="font-bold uppercase text-6xl">{count}</h2>
				<p className="text-lg">{title}</p>
			</div>
			<div>
				<FontAwesomeIcon
					icon={icon}
					size="5x"
					className="text-slate-400"
				/>
			</div>
		</div>
	);
};

export default DashSummaryItem;
