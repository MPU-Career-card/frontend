export const getShortString = (
    string: string,
    maxLength: number = 21,
) => string.slice(0, 21).concat('...');
