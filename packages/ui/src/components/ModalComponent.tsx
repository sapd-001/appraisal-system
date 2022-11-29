import React from 'react';

type ModalComponentProps = {
	children: JSX.Element | JSX.Element[] | string;
	onClose: () => void;
};
const ModalComponent: React.FC<ModalComponentProps> = (props) => {
	// Handle the click event on the overlay
	const handleOverlayClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (event.target === event.currentTarget) props.onClose();
	};

	// Handle escape key press
	const handleEsc = (event: KeyboardEvent) => {
		if (event.key === 'Escape') props.onClose();
	};
	window.addEventListener('keydown', handleEsc);

	React.useEffect(() => {
		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);

	return (
		<div className="fixed h-screen w-screen z-[2001] overflow-auto bg-black bg-opacity-60 top-0 left-0">
			<div
				className="flex flex-col justify-center items-center h-full"
				onClick={handleOverlayClick}
			>
				{props.children}
			</div>
		</div>
	);
};

export default ModalComponent;
