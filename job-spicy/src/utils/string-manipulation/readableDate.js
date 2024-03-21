export const readableDate = pubDate => {
	const date = new Date(pubDate.split(" ")[0]).toDateString().split(" ")
	return `${date[1]} ${date[2]}, ${date[3]}`
}
