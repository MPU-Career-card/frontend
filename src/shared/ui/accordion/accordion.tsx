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
    onOpen,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sizeCategory = useWindowDimensions();
    const toggleAccordion = () => {
        const open = !isOpen;

        if (open && onOpen) {
            console.log('open');
            onOpen();
        }

        setIsOpen(open);
    };

    return (
        <div className={cn(className, styles.accordion)}>
            <button
                type="button"
                className={sizeCategory.includes('xs') ? styles.headerMobile : styles.header}
                onClick={toggleAccordion}
            >
                <Flex
                    gap={16}
                    justify="space-between"
                >
                    {tags}
                    <Text
                        size="l"
                        weight="medium"
                        className={styles.text}
                    >
                        {text}
                    </Text>
                    <div>
                        <ArrowToggleIcon
                            className={cn(
                                styles.arrow,
                                {
                                    [styles.open]: isOpen,
                                },
                            )}
                        />
                    </div>
                </Flex>
            </button>
            {isOpen && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    );
};
