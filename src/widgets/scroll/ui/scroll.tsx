import {
    Scroll as ScrollComponent, Flex, Text, Card,
} from 'shared/ui';

import { cn, useWindowDimensions } from 'shared/lib';
import React, { FC } from 'react';
import { ScrollProps } from './types';
import styles from './scroll.module.scss';

export const Scroll: FC<ScrollProps> = ({
    marginTop,
    marginBottom,
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
                <ScrollComponent gap={24}>
                    <Card
                        title="Распределение задач между членами команды"
                        // eslint-disable-next-line max-len
                        text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                    />
                    <Card
                        title="Распределение задач между членами команды"
                        // eslint-disable-next-line max-len
                        text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                    />
                    <Card
                        title="Распределение задач между членами команды"
                        // eslint-disable-next-line max-len
                        text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                    />
                    <Card
                        title="Распределение задач между членами команды"
                        // eslint-disable-next-line max-len
                        text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                    />
                    <Card
                        title="Распределение задач между членами команды"
                        // eslint-disable-next-line max-len
                        text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                    />
                    <Card
                        title="Распределение задач между членами команды"
                        // eslint-disable-next-line max-len
                        text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                    />
                </ScrollComponent>
            </Flex>
        </div>
    );
};
