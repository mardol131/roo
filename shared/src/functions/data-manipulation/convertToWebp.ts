import sharp from "sharp";

type ConvertToWebpOptions = { quality?: number };

export async function convertToWebpBuffer(
  input: Buffer | ArrayBuffer | Buffer<ArrayBufferLike>,
  options: ConvertToWebpOptions
) {
  const { quality = 80 } = options;

  let buffer: Buffer;

  if (input instanceof Buffer) {
    buffer = input;
  } else if (input instanceof ArrayBuffer) {
    buffer = Buffer.from(input);
  } else {
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

export async function convertToWebpFile(
  input: Buffer | ArrayBuffer | Buffer<ArrayBufferLike>,
  originalName: string,
  options: ConvertToWebpOptions = {}
): Promise<{ buffer: Buffer; filename: string; mimetype: string }> {
  const buffer = await convertToWebpBuffer(input, options);
  const filename = originalName.replace(/\.[^.]+$/, ".webp");

  return {
    buffer,
    filename,
    mimetype: "image/webp",
  };
}
