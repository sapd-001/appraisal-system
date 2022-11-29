/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type SelectElementProps = {
	options: string[] | { [any: string]: any }[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	value: string;
	name: string;
	label: string;
	objectKey?: string;
	displayKey?: string;
};

const SelectElement: React.FC<SelectElementProps> = (props) => {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={props.name}>{props.label}</label>
			<select
				className="border border-gray-300 rounded-md px-2 py-1 w-full"
				onChange={props.onChange}
				name={props.name}
				value={props.value}
				id={props.name}
			>
				<option value=""></option>
				{props.options.map((option, index) => {
					return typeof option === 'string' ? (
						<option value={option} key={index}>
							{option}
						</option>
					) : (
						<option value={option[props.objectKey!]} key={index}>
							{
								option[
									props.displayKey ? props.displayKey : 'name'
								]
							}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SelectElement;
