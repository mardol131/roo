export type UnionFromTuple<T> = T extends (infer U)[] ? U : never;
export declare const Enum: <T extends (string | number)[]>(...args: T) => Readonly<{ [P in UnionFromTuple<T>]: P; }>;
