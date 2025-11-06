export type ReturnWithSuccess = {
    success: boolean;
    message?: string;
};
export declare function returnWithSuccess({ success, message, data, }: ReturnWithSuccess & {
    data?: {
        [key: string]: any;
    };
}): {
    success: boolean;
    message: string | undefined;
    data: {
        [key: string]: any;
    } | undefined;
};
