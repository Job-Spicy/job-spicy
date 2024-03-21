export const capitalizeType = jobType => {
	let capitalizedType = ""
	const splitType = jobType[0].split("-")
	for (const word of splitType) {
		capitalizedType += word[0].toUpperCase() + word.slice(1) + " "
	}
	return capitalizedType.trim()
}
// only ever saw one value but since it's an array there might be two
