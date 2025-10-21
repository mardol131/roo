import sharp from "sharp";

type ConvertToWebpOptions = { quality?: number };

export async function convertToWebpBuffer(
  input: Buffer,
  options: ConvertToWebpOptions
) {
  const { quality = 80 } = options;

  const outputBuffer = await sharp(input).webp({ quality }).toBuffer();

  return outputBuffer;
}

export async function convertToWebpFile(
  input: Buffer,
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
