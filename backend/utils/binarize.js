export default async function binarizeImage(image) {
	image.greyscale();
	await image.write("images/output.png")
}
