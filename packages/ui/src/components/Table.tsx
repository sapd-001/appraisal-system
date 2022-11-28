/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type TableColumnProps = {
	[key: string]: any;
	id: string | number;
	_id?: string;
	title: string;
	element?: (data: any) => JSX.Element;
	columnName: string;
	customElement: boolean;
};

export type RowProps = {
	[key: string]: any;
};

type Props = {
	columns: TableColumnProps[];
	rows: RowProps[];
};
const Table = ({ columns, rows }: Props) => {

	return (
		<div className="p-4">
			<table className="table-fixed w-full border-collapse border-2 shadow p-2 text-left overflow-x-scroll">
				<thead>
					<tr className="uppercase text-[12px] bg-slate-200">
						{columns.map((c) => (
							<th
								key={c.title+c.id}
								className="border border-slate-300 px-4 py-4"
							>
								{c.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="w-full text-[14px]">
					{rows.map((data) => {
						return (
							<tr key={data.id} className="even:bg-slate-100">
								{columns.map((col) =>
									col.element ? (
										<td key={col.columnName + data.id} className="border px-4 py-4">
											<col.element
												key={data[col.columnName]}
												data={data}
											/>
										</td>
									) : (
										<td
											key={col.columnName + data.id}
											className="border px-4 py-4"
										>
											{data[col.columnName]}
										</td>
									)
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
