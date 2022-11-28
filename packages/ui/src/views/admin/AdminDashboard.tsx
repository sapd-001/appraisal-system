import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import dashboardSummary from '../../data/adminDashboardSummary';

const AdminDashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className='border-b border-slate-400 py-6 px-2'>
				<h1 className='text-4xl font-bold'>Welcome to the admin dashboard</h1>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] p-4 gap-4">
				{dashboardSummary.map((sum) => (
					<div key={sum.title} className="flex items-center gap-4 border border-slate-400 justify-between p-10 shadow-[14px_-6px_62px_-4px_rgba(199,199,199,1),14px_-6px_62px_-4px_rgba(199,199,199,1)] rounded-md hover:scale-105 transition-all ease-linear duration-700 cursor-pointer">
						<div className='flex flex-col gap-4'>
							<h2 className='font-bold uppercase text-6xl'>{sum.count}</h2>
							<p className='text-lg'>{sum.title}</p>
						</div>
						<div>
							<FontAwesomeIcon icon={sum.icon} size="5x" className='text-slate-400'/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminDashboard;
