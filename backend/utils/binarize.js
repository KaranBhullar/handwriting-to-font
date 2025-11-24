export async function binarizeImage(image) {
	image.scan((x, y) => { // binarize image
		if (image.getPixelColor(x, y) < 0xbcbcbcff) {
			image.setPixelColor(0x000000ff, x, y);
		} else {
			image.setPixelColor(0, x, y);
		}
	})
}
