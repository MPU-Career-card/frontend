import {
    Flex, Text, ProCard, Card,
} from 'shared/ui';

import { cn } from 'shared/lib';
import React, { FC } from 'react';
import { Routes } from 'shared/config';
import { PartnersProps } from './types';
import styles from './partners.module.scss';

export const Partners: FC<PartnersProps> = ({
    marginTop,
    marginBottom,
}) => (
    <Flex
        className={cn(styles.partners)}
        gap={32}
        direction="vertical"
        align="start"
        marginTop={marginTop}
        marginBottom={marginBottom}
    >
        <Text size="xl2">
            Партнеры
        </Text>
        <Flex gap={24}>
            <Flex gap={24} direction="vertical">
                <Flex gap={24}>
                    <Card image="d" />
                    <Card image="d" />
                    <Card image="d" />
                </Flex>
                <Flex gap={24}>
                    <Card image="d" />
                    <Card image="d" />
                    <Card image="d" />
                </Flex>
            </Flex>
            <ProCard
                to={Routes.MAIN}
                color="blue"
                header="Все партнёры Московского Политеха"
                body="Пара слов о трудоустройстве студентов
                      Московского Политеха в компании партнёров"
            />
        </Flex>
    </Flex>
);
