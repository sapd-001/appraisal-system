import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type InputElementProps = {
	value: string;
	name: string;
	onChange: (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => void;
	type:
		| 'text'
		| 'number'
		| 'password'
		| 'email'
		| 'tel'
		| 'date'
		| 'time'
		| 'datetime-local'
		| 'month'
		| 'week'
		| 'url'
		| 'search'
		| 'color'
		| 'textarea';
	placeholder?: string;
	labelText?: string;
	cols?: number;
	rows?: number;
};

const InputElement: React.FC<InputElementProps> = (props) => {
	const [showPassword, setShowPassword] = React.useState<boolean>(false);

	return props.type == 'password' ? (
		<div className="w-full flex flex-col gap-2">
			{props.labelText && (
				<label className="block">{props.labelText}</label>
			)}
			<div
				className="flex items-center gap-1 border-gray-300 rounded-md focus-within:border border px-2 bg-white"
				tabIndex={0}
			>
				<input
					type={showPassword ? 'text' : 'password'}
					value={props.value}
					onChange={props.onChange}
					placeholder={props.placeholder}
					className="w-full border  p-2 flex-1 focus:ring-0 focus:outline-none focus:border-0 border-none outline-none bg-white min-h-[50rem]"
					name={props.name}
					id={props.name}
				/>
				<button
					type="button"
					onClick={() => {
						setShowPassword(!showPassword);
					}}
				>
					<FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
				</button>
			</div>
		</div>
	) : props.type === 'textarea' ? (
		<div className="w-full bg-white">
			<label>{props.labelText}</label>
			<textarea
				className="w-full border border-gray-300 rounded-md focus-within:border px-2 bg-white"
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
				name={props.name}
				id={props.name}
				cols={props.cols}
				rows={props.rows}
			/>
		</div>
	) : (
		<div className="w-full bg-white">
			<label>{props.labelText}</label>
			<input
				placeholder={props.placeholder}
				className="w-full border border-gray-300 rounded-md p-2 bg-transparent "
				value={props.value}
				onChange={props.onChange}
				type={props.type}
				name={props.name}
				id={props.name}
			/>
		</div>
	);
};

export default InputElement;
