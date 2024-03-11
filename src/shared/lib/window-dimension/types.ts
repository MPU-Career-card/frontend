import { PartialRecord } from '../../types';

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export type SizeSchema = PartialRecord<Size, number>;
