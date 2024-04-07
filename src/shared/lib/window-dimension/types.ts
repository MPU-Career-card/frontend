import { PartialRecord } from '../../types';

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type SizeSchema = PartialRecord<Size, number>;
