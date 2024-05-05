interface Profession {
  id: number;
  name: string;
  description: string;
}

export interface Speciality {
  id: number;
  tiker: string;
  color: string;
  code: string;
  name: string;
  professions: Profession[];
}
