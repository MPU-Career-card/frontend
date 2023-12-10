import { FC, useState } from 'react';

import { ArrowToggleIcon } from 'shared/icons';
import { Flex, Text } from 'shared/ui';
import { cn, useWindowDimensions } from 'shared/lib';

import { AccordionProps } from './types';

import styles from './accordion.module.scss';

export const Accordion: FC<AccordionProps> = ({
    children,
    tags,
    text,
    className,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sizeCategory = useWindowDimensions();
    const toggleAccordion = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <div className={cn(className, styles.accordion)}>
            <button
                type="button"
                onClick={toggleAccordion}
            >
                <Flex
                    gap={16}
                    justify="space-between"
                >
                    {tags}
                    {!['xs'].includes(sizeCategory) && (
                        <Text
                            size="xl"
                            weight="medium"
                            className={styles.text}
                        >
                            {text}
                        </Text>
                    )}
                    <ArrowToggleIcon
                        className={cn(
                            styles.arrow,
                            {
                                [styles.open]: isOpen,
                            },
                        )}
                    />
                </Flex>
                {['xs'].includes(sizeCategory) && (
                    <Text
                        size="xl"
                        weight="medium"
                        className={styles.textBottom}
                    >
                        {text}
                    </Text>
                )}
            </button>
            {isOpen && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    );
};
