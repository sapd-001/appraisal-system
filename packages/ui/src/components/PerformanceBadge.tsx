import React from 'react';

const PerformanceBadge = ({ value }: { value: number }) => {
	return value > 100 ? (
		<span className="bg-red-300 text-red-600">Invalid</span>
	) : value >= 75 ? (
		<span className='px-4 bg-green-400 text-green-900 rounded-3xl py-1'>{value.toFixed(2)}%</span>
	) : value >= 50 ? (
		<span className='px-4 bg-yellow-400 text-yellow-900 rounded-3xl py-1'>{value.toFixed(2)}%</span>
	) : value >= 30 ? (
		<span className='px-4 bg-pink-400 text-pink-900 rounded-3xl py-1'>{value.toFixed(2)}%</span>
	) : value >= 0 ? (
		<span className='px-4 bg-red-400 text-red-900 rounded-3xl py-1'>{value.toFixed(2)}%</span>
	) : (
		<span className='px-4 bg-slate-100 border-red-600 text-black-900 border text-red-600 rounded-3xl py-1'>Invalid</span>
	);
};

export default PerformanceBadge;
