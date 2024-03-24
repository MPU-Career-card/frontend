// eslint-disable-next-line max-len
export const numberFormatter = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
