type TParameterizeOptions = {
    charCap?: number;
    separator?: string;
};
declare const parameterize: (str: string, opts?: TParameterizeOptions) => string;

export { parameterize };
