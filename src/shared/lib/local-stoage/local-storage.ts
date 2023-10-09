export const LocalStorage = {
    get: <T extends string>(
        key: string,
        defaultValue?: T,
    ): T | undefined => localStorage.getItem(key) as T || defaultValue,

    set: (key: string, value: string) => {
        localStorage.setItem(key, value);
    },
};
