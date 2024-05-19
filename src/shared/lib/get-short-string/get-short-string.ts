export const getShortString = (
    string: string,
    maxLength: number = 21,
) => string.slice(0, maxLength).concat('...');
