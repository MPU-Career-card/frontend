import { numberFormatter } from '../number-formatter';

export const getPrice = (
    minPrice: number,
    maxPrice?: number,
    currency = '₽',
    period = 'мес',
    /* eslint-disable-next-line max-len */
) => `${numberFormatter(minPrice)} ${maxPrice ? ` - ${numberFormatter(maxPrice)}` : ''} ${currency}/${period}`;
