export declare const textTag: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    em: string;
    p: string;
    span: string;
    label: string;
};
export type TextTag = keyof typeof textTag;
export declare const fontWeight: {
    base: string;
    semibold: string;
    bold: string;
    extraBold: string;
};
export type FontWeight = keyof typeof fontWeight;
export declare const fontSize: {
    displayLg: string;
    displayMd: string;
    displaySm: string;
    headingXl: string;
    headingLg: string;
    headingMd: string;
    headingSm: string;
    headingXs: string;
    bodyXl: string;
    bodyLg: string;
    bodyMd: string;
    bodySm: string;
    bodyXs: string;
};
export type FontSize = keyof typeof fontSize;
export declare const font: {
    display: string;
    heading: string;
    body: string;
};
export type Font = keyof typeof font;
