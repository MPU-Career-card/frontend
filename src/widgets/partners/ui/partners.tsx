import {
    Flex, Text, ProCard, Card,
} from 'shared/ui';

import { cn, useWindowDimensions } from 'shared/lib';
import React, { FC } from 'react';
import { Routes } from 'shared/config';
import { PartnersProps } from './types';
import styles from './partners.module.scss';

export const Partners: FC<PartnersProps> = ({
    marginTop,
    marginBottom,
}) => {
    const sizeCategory = useWindowDimensions();
    return (
        <Flex
            className={styles.partners}
            gap={32}
            direction="vertical"
            align="start"
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <Text size="xl2">
                Партнеры
            </Text>
            <Flex
                className={styles.partnersContent}
                gap={24}
                direction={
                    ['xs', 's', 'm', 'l'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
            >
                <Flex
                    gap={24}
                    direction={['s'].includes(sizeCategory) ? 'horizontal' : 'vertical'}
                >
                    <Flex
                        gap={24}
                        direction={
                            ['xs', 's'].includes(sizeCategory) ? 'vertical' : 'horizontal'
                        }
                    >
                        <Card image="d" />
                        <Card image="d" />
                        <Card image="d" />
                    </Flex>
                    <Flex
                        gap={24}
                        direction={
                            ['xs', 's'].includes(sizeCategory) ? 'vertical' : 'horizontal'
                        }
                    >
                        <Card image="d" />
                        <Card image="d" />
                        <Card image="d" />
                    </Flex>
                </Flex>
                <ProCard
                    isFullWidth
                    to={Routes.MAIN}
                    color="blue"
                    header="Все партнёры Московского Политеха"
                    body="Пара слов о трудоустройстве студентов
                      Московского Политеха в компании партнёров"
                />
            </Flex>
        </Flex>
    );
};
