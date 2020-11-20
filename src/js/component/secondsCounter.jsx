import React, { useState, useEffect } from "react";
import secondsCounter from "../../styles/secondsCounter.css";
import PropTypes from "prop-types";

function SecondsCounter(props) {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const time = setInterval(() => {
			setSeconds(c => c + 1);
		}, props.delay);
	}, []);
	if (seconds == 10) {
		clearInterval(seconds);
		setSeconds(0);
	}

	return (
		<div className="counter">
			<h2 className="number">{seconds}</h2>
		</div>
	);
}

SecondsCounter.propTypes = {
	delay: PropTypes.number
};

export default SecondsCounter;
