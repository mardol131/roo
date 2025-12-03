import { Enum } from "../functions/enum";
export const buttonSize = Enum("4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs");
export const rounding = {
    sm: "rounded-small",
    md: "rounded-medium",
    lg: "rounded-large",
    full: "rounded-full",
};
export const buttonType = {
    submit: "submit",
    button: "button",
    reset: "reset",
};
