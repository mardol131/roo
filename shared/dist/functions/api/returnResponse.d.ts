export type ReturnResponse = {
    success: boolean;
    message?: string;
    data?: any;
    status?: number;
};
export declare function returnResponse({ success, message, data, status, }: ReturnResponse): Response;
