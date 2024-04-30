import { ComponentProps } from 'react';

type Task = {
  title: string;
  description: string;
}

export type TasksProps = ComponentProps<'div'> & {
    marginTop?: number;
    marginBottom?: number;
    tasks: Task[];
};
