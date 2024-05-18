export interface Profession {
  id: number;
  name: string;
  description: string;
}

export interface Speciality {
  id: number;
  faculty: string;
  color: string;
  code: string;
  name: string;
  professions: Profession[];
}

export type Specialities = Record<string, Speciality[]>;
