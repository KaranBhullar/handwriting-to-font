import binarizeImage from "./utils/binarize.js";
import { Jimp } from "jimp";

async function run() {
	const image = await Jimp.read("images/input.png");
	return await binarizeImage(image);
}

run();
