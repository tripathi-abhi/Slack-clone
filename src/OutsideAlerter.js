import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
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

function OutsideAlerter(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, props.callback);

	return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
	children: PropTypes.element.isRequired,
	callback: PropTypes.element.isRequired,
};

export default OutsideAlerter;
