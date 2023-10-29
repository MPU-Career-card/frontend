import { Color } from 'shared/types';

export const getArrowColor = (color: Color) => {
    if (['yellow', 'transparent', 'silver'].includes(color)) {
        return 'black';
    }

    return 'white';
};
