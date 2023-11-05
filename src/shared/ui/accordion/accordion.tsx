import { cn } from 'shared/lib';

import React, {
    ReactElement, FC, cloneElement, useState,
} from 'react';
import styles from './accordion.module.scss';
import { AccordionProps } from './types';

export const Accordion: FC<AccordionProps> = ({
    justify = 'center',
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const childrenArray = React.Children.toArray(children) as ReactElement[];

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cn(
            styles.accordion,
            styles[`justify-${justify}`],
        )}
        >
            <button onClick={toggleAccordion} >
                sdfnalsdfkasd
            </button>
            {isOpen && childrenArray.map((card) => cloneElement(card))}
        </div>
    );
};
