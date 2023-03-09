import React, { useState } from "react";

const Greeting = () => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};

	return (
		<div>
			<h2 data-testid="hello">Hello World</h2>
			{!changedText && <p>It's good to see you!</p>}
			{changedText && <p>Changed!</p>}
			<button name="change-state" onClick={changeTextHandler}>
				Change Text!
			</button>
		</div>
	);
};

export default Greeting;
