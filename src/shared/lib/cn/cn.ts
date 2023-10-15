import { Mods } from './types';

export const cn = (
    ...args: Array<Mods | string | undefined>
): string => args.map((item) => {
    if (typeof item === 'undefined') {
        return undefined;
    }

    if (typeof item === 'string') {
        return item;
    }

    return Object.entries(item)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className)
        .join(' ');
}).join(' ');
