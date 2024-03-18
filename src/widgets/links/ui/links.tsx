/* eslint-disable max-len */

import {
    Flex, Text, CardLink,
} from 'shared/ui';

import { cn, useWindowDimensions } from 'shared/lib';
import React, { FC } from 'react';
import { Routes } from 'shared/config';
import { LinksProps } from './types';
import styles from './links.module.scss';

export const Links: FC<LinksProps> = ({
    marginTop,
    marginBottom,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <Flex
            className={cn(styles.links)}
            gap={['xs', 's', 'm', 'l'].includes(sizeCategory) ? 0 : 32}
            align="start"
            direction={
                ['xs', 's', 'm', 'l'].includes(sizeCategory)
                    ? 'vertical' : 'horizontal'
            }
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <Text size="xl2" className={styles.header}>
                Полезные ссылки
            </Text>
            <Flex
                gap={32}
                direction={
                    ['xs', 's'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
            >
                <CardLink
                    to="https://profitworks.com.ua/ru/professii-ru/sredstva-massovoj-informatsii/korrespondent&sa=D&source=docs&ust=1710754776268138&usg=AOvVaw2u5jdSeO-oLB5iHJmV6i0M"
                    color="yellow"
                    highlight={false}
                >
                    <Text size="m" weight="semi">
                        Все о профессии корреспондента
                    </Text>
                    <Text>
                        Пара слов о трудоустройстве студентов
                        Московского Политеха
                    </Text>
                </CardLink>
                <CardLink
                    to="https://news.pressfeed.ru/bolshoj-gajd-po-professii-zhurnalista-rabota-zadachi-zarplata-karera-i-istorii-korrespondentov/"
                    color="yellow"
                    highlight={false}
                >
                    <Text size="m" weight="semi">
                        Гайд по профессии журналиста
                    </Text>
                    <Text>
                        Пара слов о трудоустройстве студентов
                        Московского Политеха
                    </Text>
                </CardLink>
                <CardLink
                    to="https://vplate.ru/professii/korrespondent/"
                    color="yellow"
                    highlight={false}
                >
                    <Text size="m" weight="semi">
                        Какие бывают репортеры?
                    </Text>
                    <Text>
                        Пара слов о трудоустройстве студентов
                        Московского Политеха
                    </Text>
                </CardLink>
            </Flex>
        </Flex>
    );
};
