import { cn } from 'shared/lib';

import React, {
    ReactElement, FC, cloneElement, useState,
} from 'react';
import { ArrowToggleIcon } from 'shared/icons';
import styles from './accordion.module.scss';
import { AccordionProps } from './types';

export const Accordion: FC<AccordionProps> = ({
    justify = 'center',
    children,
    tags,
    text,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const childrenArray = React.Children.toArray(children) as ReactElement[];

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button
            type="button"
            onClick={toggleAccordion}
            className={cn(
                styles.accordion,
                styles[`justify-${justify}`],
            )}

        >
            <div className={styles.accordionContainer}>
                <div className={styles.header}>
                    {tags}
                    {text}
                    <ArrowToggleIcon isOpen={isOpen} />
                </div>
                {isOpen && (
                    <div className={styles.accordion_card}>
                        {childrenArray.map((card) => cloneElement(card))}
                    </div>
                )}
            </div>
        </button>
    );
};
