import React, { FC, useMemo } from 'react';

import {
    CardLink,
    Flex,
    Tag,
    Text,
} from 'shared/ui';
import { getDeclensions, NBSP } from 'shared/lib';

import { SpecialityCardProps } from './types';

import styles from './speciality-card.module.scss';

export const SpecialityCard: FC<SpecialityCardProps> = ({
    to,
    faculty,
    budgetPlacesCount,
    name,
    passingScore,
    period,
    price,
}) => {
    const priceValue = useMemo(
        () => (price.value / 1000).toFixed(1),
        [price.value],
    );

    const periodLabel = useMemo(
        () => getDeclensions(period, ['год', 'года', 'лет']),
        [period],
    );

    const priceLabel = `тыс${NBSP}(${price.year})`;
    const budgetPlacesCountLabel = `(${budgetPlacesCount.year})`;
    const passingScoreLabel = `(${passingScore.year})`;

    return (
        <CardLink to={to} color="white">
            <Flex
                className={styles.header}
                direction="vertical"
                align="start"
                gap={32}
            >
                <Tag color="gray">{faculty}</Tag>
                <Text size="xl" weight="semi">{name}</Text>
            </Flex>
            <Flex gap={80}>
                <Flex direction="vertical" align="start" gap={32}>
                    <Flex direction="vertical" align="start" gap={4}>
                        <Flex gap={6} align="baseline">
                            <Text size="xl" weight="semi">{priceValue}</Text>
                            <Text size="s" weight="semi">{priceLabel}</Text>
                        </Flex>
                        <Text size="s">Стоимость, ₽</Text>
                    </Flex>
                    <Flex direction="vertical" align="start" gap={4}>
                        <Flex gap={6} align="baseline">
                            <Text size="xl" weight="semi">
                                {budgetPlacesCount.value}
                            </Text>
                            <Text size="s" weight="semi">
                                {budgetPlacesCountLabel}
                            </Text>
                        </Flex>
                        <Text size="s">Бюджетных мест</Text>
                    </Flex>
                </Flex>
                <Flex direction="vertical" align="start" gap={32}>
                    <Flex direction="vertical" align="start" gap={4}>
                        <Flex gap={6} align="baseline">
                            <Text size="xl" weight="semi">
                                {passingScore.value}
                            </Text>
                            <Text size="s" weight="semi">
                                {passingScoreLabel}
                            </Text>
                        </Flex>
                        <Text size="s">{`Проходной${NBSP}балл`}</Text>
                    </Flex>
                    <Flex direction="vertical" align="start" gap={4}>
                        <Flex gap={6} align="baseline">
                            <Text size="xl" weight="semi">{period}</Text>
                            <Text size="s" weight="semi">{periodLabel}</Text>
                        </Flex>
                        <Text size="s">Срок обучения</Text>
                    </Flex>
                </Flex>
            </Flex>
        </CardLink>
    );
};
