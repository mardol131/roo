export type UnionFromTuple<T> = T extends (infer U)[] ? U : never;

export const Enum = <T extends (string | number)[]>(...args: T) => {
  return Object.freeze(
    args.reduce((acc, next) => {
      return {
        ...acc,
        [next]: next,
      };
    }, Object.create(null)) as { [P in UnionFromTuple<typeof args>]: P }
  );
};
