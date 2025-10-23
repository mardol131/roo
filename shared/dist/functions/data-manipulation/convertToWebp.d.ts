type ConvertToWebpOptions = {
    quality?: number;
};
export declare function convertToWebpBuffer(input: Buffer | ArrayBuffer | Buffer<ArrayBufferLike>, options: ConvertToWebpOptions): Promise<Buffer<ArrayBufferLike>>;
export declare function convertToWebpFile(input: Buffer | ArrayBuffer | Buffer<ArrayBufferLike>, originalName: string, options?: ConvertToWebpOptions): Promise<{
    buffer: Buffer;
    filename: string;
    mimetype: string;
}>;
export {};
