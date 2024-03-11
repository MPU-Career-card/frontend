export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
