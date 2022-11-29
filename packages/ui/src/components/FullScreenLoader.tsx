/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-29 15:01:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-29 15:06:06
 * @ Description:
 */

import React from 'react';

const FullScreenLoader = () => {
	return (
		<div className="fixed top-0 left-0 flex items-center justify-center h-screen w-screen z-[9990] bg-slate-700 bg-opacity-70">
			<div className="flex flex-col items-center justify-center space-y-4">
				<div className="w-12 h-12 border-4 border-t-4 border-r-green-700 border-t-yellow-700 border-l-blue-700 border-b-red-700 rounded-full animate-spin"></div>
				<div className="text-gray-500">Loading...</div>
			</div>
		</div>
	);
};

export default FullScreenLoader;
