import { EmailSegments } from "../types/types";
type SubscribeContactProps = {
    email: string;
    segment: EmailSegments;
    firstName?: string;
    lastName?: string;
    [key: string]: any;
};
export declare function subscribeContact(props: SubscribeContactProps): Promise<import("resend").CreateContactResponse>;
export {};
