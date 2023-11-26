import {
    Flex, Text, CardLink,
} from 'shared/ui';

import { cn } from 'shared/lib';
import React, { FC } from 'react';
import { Routes } from 'shared/config';
import { LinksProps } from './types';
import styles from './links.module.scss';

export const Links: FC<LinksProps> = ({
    marginTop,
    marginBottom,
}) => (
    <Flex
        className={cn(styles.links)}
        gap={32}
        marginTop={marginTop}
        marginBottom={marginBottom}
    >
        <Text size="xl2">
            Полезные ссылки
        </Text>
        <CardLink
            to={Routes.MAIN}
            color="yellow"
            highlight={false}
        >
            <Text size="m" weight="semi">
                Все партнёры
                Московского Политеха
            </Text>
            <Text>
                Пара слов о трудоустройстве студентов
                Московского Политеха
            </Text>
        </CardLink>
        <CardLink
            to={Routes.MAIN}
            color="yellow"
            highlight={false}
        >
            <Text size="m" weight="semi">
                Все партнёры
                Московского Политеха
            </Text>
            <Text>
                Пара слов о трудоустройстве студентов
                Московского Политеха
            </Text>
        </CardLink>
        <CardLink
            to={Routes.MAIN}
            color="yellow"
            highlight={false}
        >
            <Text size="m" weight="semi">
                Все партнёры
                Московского Политеха
            </Text>
            <Text>
                Пара слов о трудоустройстве студентов
                Московского Политеха
            </Text>
        </CardLink>
    </Flex>
);
