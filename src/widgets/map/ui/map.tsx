/* eslint-disable max-len */
import {
    Flex, Text,
} from 'shared/ui';

import React, { FC, useEffect } from 'react';
import { cn, useWindowDimensions } from 'shared/lib';
import { CareerPointer } from 'shared/icons/careerPointer';
import { MapProps } from './types';
import styles from './map.module.scss';

export const Map: FC<MapProps> = ({
    marginTop,
    marginBottom,
    pointers = 2,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <div
            className={cn(styles.map)}
            style={{ marginTop, marginBottom }}
        >
            <Text size="xl2" color="white">
                Карьерный путь
            </Text>
            <Flex
                marginTop={['xs', 's', 'm'].includes(sizeCategory) ? 50 : 0}
                direction={
                    ['xs', 's', 'm'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
                gap={['xs', 's', 'm'].includes(sizeCategory) ? 50 : 130}
            >
                <div className={cn(
                    styles.mapContainer,
                    styles[sizeCategory],
                )}
                >
                    <div className={styles.firstPointer}>
                        <CareerPointer fill="#0039F7" />
                        <Text size="l" color="white" breakWords>Младший продуктовый аналитик</Text>
                    </div>
                    <div className={styles.lastPointer}>
                        <CareerPointer fill="#C766FF" />
                        <Text size="l" color="greyTransparent" breakWords>Гениральный директор</Text>
                    </div>
                    {pointers > 2 && (
                        <div className={styles.thirdPointer}>
                            <CareerPointer fill="#80C528" />
                            <Text size="l" color="greyTransparent" breakWords>Продакт менеджер</Text>
                        </div>
                    )}
                    {pointers > 3 && (
                        <div className={styles.forthPointer}>
                            <CareerPointer fill="#EB6ECF" />
                            <Text size="l" color="greyTransparent" breakWords>Продакт менеджер</Text>
                        </div>
                    )}
                    {pointers > 4 && (
                        <div className={styles.fivethPointer}>
                            <CareerPointer fill="#DD8E46" />
                            <Text size="l" color="greyTransparent" breakWords>Директор по продукту</Text>
                        </div>
                    )}
                    {pointers > 5 && (
                        <div className={styles.sixthPointer}>
                            <CareerPointer fill="#3ABBC4" />
                            <Text size="l" color="greyTransparent" breakWords>Директор по продукту</Text>
                        </div>
                    )}

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
};
