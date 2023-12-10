import React, { ComponentProps } from 'react';

export type TabsProps = Omit<ComponentProps<'div'>, 'onClick'> & {
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  value: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
  small?: boolean;
};
