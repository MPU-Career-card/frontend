type SpecialityProperty = {
  value: number;
  year: number
}

export type SpecialityCardProps = {
  to: string;
  faculty: string;
  name: string;
  price: SpecialityProperty;
  passingScore: SpecialityProperty;
  budgetPlacesCount: SpecialityProperty;
  period: number;
}
