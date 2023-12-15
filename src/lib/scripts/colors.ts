import z from 'zod';

export const parseColorHexString = (colorString: string) => {
	if (colorString.length > 7 || colorString.length < 6) {
		throw new Error();
	}
	const rgbHexStrings = [
		colorString.slice(-6, -4),
		colorString.slice(-4, -2),
		colorString.slice(-2, colorString.length)
	];
	const rgbDecimalValues = [];

	for (let i = 0; i < 3; i++) {
		let color = parseInt(rgbHexStrings[i], 16);
		if (Number.isNaN(color) || color < 0 || color > 255) {
			throw new Error();
		}
		rgbDecimalValues[i] = color;
	}
	return {
		r: rgbDecimalValues[0],
		g: rgbDecimalValues[1],
		b: rgbDecimalValues[2]
	};
};

export const colorZ = z.string().refine((queryString) => {
	try {
		parseColorHexString(queryString);
		return true;
	} catch (err) {
		return false;
	}
});
export type ColorZ = z.infer<typeof colorZ>;

export const averageColors = function (color1: ColorZ, color2: ColorZ) {
	const c1 = parseColorHexString(color1);
	const c2 = parseColorHexString(color2);
	if (!c1 || !c2) throw new Error();
	return {
		r: Math.floor(Math.sqrt((Math.pow(c1.r, 2) + Math.pow(c2.r, 2)) / 2)),
		g: Math.floor(Math.sqrt((Math.pow(c1.g, 2) + Math.pow(c2.g, 2)) / 2)),
		b: Math.floor(Math.sqrt((Math.pow(c1.b, 2) + Math.pow(c2.b, 2)) / 2))
	};
};
