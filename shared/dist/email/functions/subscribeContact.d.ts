import { EmailSegments } from "../types/segments";
type SubscribeContactProps = {
    email: string;
    segment: EmailSegments;
    firstName?: string;
    lastName?: string;
    [key: string]: any;
};
export declare function subscribeContact(props: SubscribeContactProps): Promise<{
    id: string | undefined;
}>;
export {};
