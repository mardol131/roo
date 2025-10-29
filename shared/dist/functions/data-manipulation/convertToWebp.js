import sharp from "sharp";
export async function convertToWebpBuffer(input, options) {
    const { quality = 80 } = options;
    let buffer;
    if (input instanceof Buffer) {
        buffer = input;
    }
    else if (input instanceof ArrayBuffer) {
        buffer = Buffer.from(input);
    }
    else {
        throw new TypeError("Unsupported input type for convertToWebpBuffer");
    }
    const outputBuffer = await sharp(buffer)
        .webp({
        quality: 90,
        effort: 4,
        nearLossless: true,
        smartSubsample: true,
    })
        .toBuffer();
    return outputBuffer;
}
export async function convertToWebpFile(input, originalName, options = {}) {
    const buffer = await convertToWebpBuffer(input, options);
    const filename = originalName.replace(/\.[^.]+$/, ".webp");
    return {
        buffer,
        filename,
        mimetype: "image/webp",
    };
}
