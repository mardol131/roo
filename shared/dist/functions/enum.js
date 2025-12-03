export const Enum = (...args) => {
    return Object.freeze(args.reduce((acc, next) => {
        return {
            ...acc,
            [next]: next,
        };
    }, Object.create(null)));
};
