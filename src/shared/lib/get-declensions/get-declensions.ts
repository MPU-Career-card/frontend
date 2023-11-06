export const getDeclensions = (
    value: number,
    words: [string, string, string],
) => {
    const hundredDivided = Math.abs(value) % 100;
    const tenDivided = hundredDivided % 10;

    if (hundredDivided > 10 && hundredDivided < 20) return words[2];
    if (tenDivided > 1 && tenDivided < 5) return words[1];
    if (tenDivided === 1) return words[0];

    return words[2];
};
