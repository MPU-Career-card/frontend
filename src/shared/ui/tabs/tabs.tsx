import React, {
    FC, cloneElement, ReactElement,
} from 'react';

import { cn } from 'shared/lib';

import { TabsProps } from './types';

import styles from './tabs.module.scss';

export const Tabs: FC<TabsProps> = ({
    justify = 'center',
    value,
    children,
    onClick,
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
                    active: tab.props.value === value,
                    onClick: () => onClick(tab.props.value),
                },
            ))}
        </div>
    );
};
