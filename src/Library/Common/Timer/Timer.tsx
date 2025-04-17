import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { TimerStyles } from "@/Library/pages/SimulatorExam/SimulatorExam.styles";

const Timer = ({ timeInSeconds, totalTime }: { timeInSeconds: number; totalTime: number }) => {
	const secondsToMinutes = (totalSeconds: number) => {
		const hours = Math.floor(totalSeconds / 3600);
		const remainderAfterHours = totalSeconds % 3600;
		const minutes = Math.floor(remainderAfterHours / 60);
		const seconds = remainderAfterHours % 60;

		if (hours > 0) {
			const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
			const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
			return `${hours}:${paddedMinutes}:${paddedSeconds}`;
		} else if (minutes > 0) {
			const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
			return `${minutes}:${paddedSeconds}`;
		} else {
			return `${seconds}s`;
		}
	};

	return (
		<>
			<TimerStyles>
				<CountdownCircleTimer
					key={timeInSeconds + totalTime}
					size={28}
					strokeWidth={4}
					isPlaying
					duration={totalTime}
					initialRemainingTime={timeInSeconds}
					colors={["#4F29F3", "#FFB600FF", "#E40C2BFF", "#E40C2BFF"]}
					colorsTime={[7, 5, 2, 0]}
				>
					{({ remainingTime }) => {
						return secondsToMinutes(remainingTime);
					}}
				</CountdownCircleTimer>
			</TimerStyles>
		</>
	);
};

export default Timer;
