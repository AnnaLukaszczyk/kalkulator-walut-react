import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const Clock = () => {
	const [date, setDate] = useState(new Date());

	const formatDate = (date) => {
		const day = date.toLocaleDateString(undefined, {
			weekday: "long",
			day: "numeric",
			month: "short",
		});
		const time = date.toLocaleTimeString();

		return `${day}, ${time}`;
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(() => new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<StyledClock>
			<p>Dzisiaj jest {formatDate(date)}</p>
		</StyledClock>
	);
};

export default Clock;
