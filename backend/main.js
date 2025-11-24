import { Jimp } from "jimp";
import { binarizeImage } from "./utils/binarize.js";


async function run() {
	const image = await Jimp.read("images/input.png");
	await binarizeImage(image);
	await image.write("images/output.png")
}

run();
