import {
    Flex, Text, Card,
} from 'shared/ui';

import React, { FC } from 'react';
import { CardsProps } from './types';
import styles from './cards.module.scss';

export const Cards: FC<CardsProps> = ({
    marginTop,
    marginBottom,
}) => (
    <Flex
        className={styles.scroll}
        gap={48}
        direction="vertical"
        marginTop={marginTop}
        marginBottom={marginBottom}
    >
        <Flex align="start" gap={24}>
            <Text size="xl2">
                Основные задачи
            </Text>
            <Card
                title="Распределение задач между членами команды"
                // eslint-disable-next-line max-len
                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                image="a"
            />
            <Card
                title="Распределение задач между членами команды"
                // eslint-disable-next-line max-len
                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                image="a"
            />
            <Card
                title="Распределение задач между членами команды"
                // eslint-disable-next-line max-len
                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                image="a"
            />
        </Flex>
        <Flex gap={24}>
            <Card
                title="Распределение задач между членами команды"
                // eslint-disable-next-line max-len
                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                image="a"
            />
            <Card
                title="Распределение задач между членами команды"
                // eslint-disable-next-line max-len
                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                image="a"
            />
            <Card
                title="Распределение задач между членами команды"
                // eslint-disable-next-line max-len
                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                image="a"
            />
            <Card
                title="Распределение задач между членами команды"
                // eslint-disable-next-line max-len
                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                image="a"
            />
        </Flex>
    </Flex>
);
