import {
    Scroll as ScrollComponent, Flex, Text, Card,
} from 'shared/ui';

import { cn } from 'shared/lib';
import React, { FC } from 'react';
import { ScrollProps } from './types';
import styles from './scroll.module.scss';

export const Scroll: FC<ScrollProps> = ({
    marginTop,
    marginBottom,
}) => (
    <Flex
        className={cn(styles.scroll)}
        gap={24}
        marginTop={marginTop}
        marginBottom={marginBottom}
    >
        <Text size="xl2">
            Основные задачи
        </Text>
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
);
