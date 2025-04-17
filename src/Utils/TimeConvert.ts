export default function secondsToMinutes(totalSeconds: number) {
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
}
