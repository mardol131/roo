export type ReturnWithSuccess = {
    success: boolean;
    message?: string;
    data?: any;
    status?: number;
};
export declare function returnWithSuccess({ success, message, data, status, }: ReturnWithSuccess & {
    data?: any;
}): Response;
