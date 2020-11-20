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
			<div className="row justify-content-center">
				<i className="far fa-clock" />
				<SecondsCounter delay={100000000} />
				<SecondsCounter delay={10000000} />
				<SecondsCounter delay={1000000} />
				<SecondsCounter delay={100000} />
				<SecondsCounter delay={10000} />
				<SecondsCounter delay={1000} />
			</div>
		</div>
	);
}
