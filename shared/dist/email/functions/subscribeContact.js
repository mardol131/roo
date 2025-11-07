import { Resend } from "resend";
export async function subscribeContact(props) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { email, firstName, lastName, segment, ...rest } = props;
        let propertyPairs = {
            message: null,
            countryCode: null,
            marketing: null,
            gdpr: null,
            reference: null,
            companyType: null,
            services: null,
            phone: null,
            web: null,
            company: null,
        };
        if (rest && (segment === "RooContact" || segment === "RooWaitlist")) {
            for (const [key, value] of Object.entries(rest)) {
                const keyType = key;
                if (key in propertyPairs) {
                    if (Array.isArray(value)) {
                        propertyPairs[keyType] = value.join(",");
                    }
                    else if (typeof value !== "string") {
                        propertyPairs[keyType] = JSON.stringify(value);
                    }
                    else {
                        propertyPairs[keyType] = value;
                    }
                }
            }
        }
        const response = await resend.contacts.create({
            email: email,
            firstName: firstName,
            lastName: lastName,
            properties: propertyPairs,
        });
        const contactId = response.data?.id;
        return response;
    }
    catch (e) {
        if (e instanceof Error)
            throw e;
        throw new Error(String(e));
    }
}
