import { ComponentProps } from 'react';

type Skill = {
  title: string;
  description: string;
  image: string;
}

export type SkillsProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    skills: Skill[];
};
