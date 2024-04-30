import React, { FC } from 'react';

import {
    Scroll, Flex, Text, Card,
} from 'shared/ui';
import { cn, useWindowDimensions } from 'shared/lib';

import { TasksProps } from './types';

import styles from './tasks.module.scss';

export const Tasks: FC<TasksProps> = ({
    marginTop,
    marginBottom,
    tasks,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <div style={{ marginTop, marginBottom }}>
            {['xs', 's', 'm'].includes(sizeCategory) && (
                <Text size="xl2" className={styles.header}>
                    Основные задачи
                </Text>
            )}
            <Flex
                className={cn(styles.scroll)}
                align="start"
                gap={24}
            >
                {['xxl', 'xl', 'l'].includes(sizeCategory) && (
                    <Text size="xl2">
                        Основные задачи
                    </Text>
                )}
                <Scroll gap={24}>
                    {tasks.map(({ title, description }) => (
                        <Card
                            width={300}
                            key={title}
                            title={title}
                            text={description}
                        />
                    ))}
                </Scroll>
            </Flex>
        </div>
    );
};
