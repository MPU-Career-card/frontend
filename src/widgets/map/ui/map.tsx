/* eslint-disable max-len */
import {
    Flex, Text,
} from 'shared/ui';

import React, { FC } from 'react';
import { cn } from 'shared/lib';
import { MapProps } from './types';
import styles from './map.module.scss';

export const Map: FC<MapProps> = ({
    marginTop,
    marginBottom,
}) => (
    <div
        className={cn(styles.map)}
        style={{ marginTop, marginBottom }}
    >
        <Text size="xl2" color="white">
            Карьерный путь
        </Text>
        <Flex gap={110}>
            <div>
                {/* TODO: наверное, надо добавить новую иконку */}
                <svg xmlns="http://www.w3.org/2000/svg" width="537" height="352" viewBox="0 0 537 352" fill="none">
                    <path d="M10.0586 350.594C10.0586 350.594 -38.3476 216.094 89.2042 216.094C377.35 216.094 3.18767 61.5525 274.373 62.8458C545.559 64.1391 221.204 194.094 461.204 194.094C649.704 194.094 418.704 50.0946 461.205 0.595122" stroke="white" strokeLinecap="round" strokeDasharray="16 16" />
                </svg>
            </div>
            <Flex direction="vertical" gap={24} align="start">
                <div>
                    <Text size="l" color="white">
                        Младший продуктовый аналитик
                    </Text>
                    <Text size="l" color="pink">
                        60 000–80 000 ₽/мес
                    </Text>
                </div>
                <Text color="white">
                    Для того чтобы круто управлять продуктом, нужно быть хорошо подкованным в нескольких профессиональных областях сразу, одна из которых — продуктовая аналитика. Продакт менеджеры часто вырастают из продуктовых аналитиков, потому что вторые говорят на языке цифр и метрик и выдвигают гипотезы на основе данных.
                </Text>
            </Flex>
        </Flex>
    </div>
);
