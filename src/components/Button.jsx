import PropTypes from 'prop-types';
import { useState } from "react";

const Button = ({ text, classname, onClick }) => {
	const [isShrinking, setIsShrinking] = useState(false);

	const handleClick = (e) => {
		if (onClick) {
			onClick(e);
			return;
		}
		setIsShrinking(true);
		setTimeout(() => {
			setIsShrinking(false);
		}, 150);
	};
	return (
		<button
			className={`font-dmsans transition-opacity block  font-medium p-[15px]  rounded-[12px] text-white leading-[31.25px]${
				isShrinking ? "transform scale-90" : ""
			} transition-transform duration-500 ${classname}`}
			onClick={handleClick}>
			{text}
		</button>
	);
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    classname: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;