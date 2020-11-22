import React from "react";
import SecondsCounter from "./secondsCounter.jsx";
import SecondsCounter_copy from "./secondsCounter_copy.jsx";
import index from "../../styles/index.scss";

//create your first component
export function Home() {
	return (
		<div>
			<div className="row justify-content-center blockTitle">
				<div className="completeTitle">
					<h1 className="firtsLine">Simple Counter With</h1>
					<h2 className="secondLine">
						React <i className="fab fa-react" />
					</h2>
				</div>
			</div>
			<div className="row justify-content-center ">
				<i className="far fa-clock" />
				<SecondsCounter delay={100000000} />
				<SecondsCounter delay={10000000} />
				<SecondsCounter delay={1000000} />
				<SecondsCounter delay={100000} />
				<SecondsCounter delay={10000} />
				<SecondsCounter delay={1000} />
			</div>
			<div className="row justify-content-center">
				<p>
					<p className="fraseDestacada">
						Second counter created with React.
					</p>
					All figures are the same component called 6 times with a
					propType that determines how often to add a number to the
					amount. Thus we give the feeling of having a counter that
					accumulates a total figure.
				</p>
			</div>
		</div>
	);
}
