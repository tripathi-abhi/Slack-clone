import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, callback) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

function OutsideAlerter({ children, callback }) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, callback);
	return <div ref={wrapperRef}>{children}</div>;
}

OutsideAlerter.propTypes = {
	children: PropTypes.element.isRequired,
	callback: PropTypes.element.isRequired,
};

export default OutsideAlerter;
