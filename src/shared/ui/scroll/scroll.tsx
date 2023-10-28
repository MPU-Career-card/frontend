import { cn } from 'shared/lib';

import React, { ReactElement, FC, cloneElement } from 'react';
import { Card } from '../card';
import styles from './scroll.module.scss';
import { ScrollProps } from './types';

export const Scroll: FC<ScrollProps> = ({
    justify = 'center',
    children,
}) => {
    const childrenArray = React.Children
        .toArray(children) as ReactElement[];

    return (
        <div className={cn(
            styles.tabs,
            styles[`justify-${justify}`],
        )}
        >
            {childrenArray.map((tab) => cloneElement(
                tab,
                {
                    active: tab.props.value !== value,
                },
            ))}
        </div>
    );
};
