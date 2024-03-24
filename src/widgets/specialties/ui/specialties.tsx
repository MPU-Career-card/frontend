/* eslint-disable max-len */

import {
    Flex, Text, Card, Tabs, Tab, SpecialityCard,
} from 'shared/ui';

import React, { FC, useState } from 'react';
import { cn, useWindowDimensions } from 'shared/lib';

import { SpecialtiesProps } from './types';

import styles from './specialties.module.scss';

export const Specialties: FC<SpecialtiesProps> = ({
    marginTop,
    marginBottom,
}) => {
    const [tab, setTab] = useState('1');
    const sizeCategory = useWindowDimensions();

    return (
        <div
            className={cn(styles.specialties)}
            style={{ marginTop, marginBottom }}
        >
            <Text size="xl2">
                Программы обучения
            </Text>
            <div className={cn(styles.tabs)}>
                <Tabs value={tab} onClick={setTab} small={['xs', 's', 'm'].includes(sizeCategory)}>
                    <Tab
                        roundedSide="left"
                        rounded={['xs', 's', 'm'].includes(sizeCategory)}
                        value="1"
                    >
                        <Text size="l" weight="medium" color={tab === '1' ? 'white' : 'grey'}>
                            Бакалавриат и специалитет
                        </Text>
                    </Tab>
                    <Tab
                        value="2"
                        roundedSide={['xs', 's', 'm'].includes(sizeCategory) ? 'left' : ''}
                    >
                        <Text size="l" weight="medium" color={tab === '2' ? 'white' : 'grey'}>
                            Магистратура
                        </Text>
                    </Tab>
                    <Tab roundedSide="right" value="3">
                        <Text size="l" weight="medium" color={tab === '3' ? 'white' : 'grey'}>
                            ДПО
                        </Text>
                    </Tab>
                </Tabs>
            </div>
            {tab === '1' && (
                <Flex
                    align="stretch"
                    gap={8}
                    direction={
                        ['xs', 's', 'm', 'l'].includes(sizeCategory)
                            ? 'vertical' : 'horizontal'
                    }
                >
                    <SpecialityCard
                        className={styles.card}
                        to="https://mospolytech.ru/postupayushchim/programmy-obucheniya/periodicheskie-izdaniya-i-multimediynaya-zhurnalistika/&sa=D&source=docs&ust=1710754776266808&usg=AOvVaw3OxnC2z3DLztynOP8KsAtp"
                        faculty="институт издательского дела и журналистики"
                        name="Периодические издания и мультимедийная журналистика (Журналистика)"
                        budgetPlacesCount={{ value: 35, year: 2024 }}
                        passingScore={{ value: 295, year: 2023 }}
                        price={{ value: 268200, year: 2023 }}
                        period={4}
                    />
                    <SpecialityCard
                        className={styles.card}
                        to="https://mospolytech.ru/postupayushchim/programmy-obucheniya/delovaya-zhurnalistika/&sa=D&source=docs&ust=1710754776267148&usg=AOvVaw3w-d-7V5ek1zY10C-XrV9v"
                        faculty="институт издательского дела и журналистики"
                        name="Деловая журналистика (Журналистика)"
                        budgetPlacesCount={{ value: 35, year: 2024 }}
                        passingScore={{ value: 295, year: 2023 }}
                        price={{ value: 268200, year: 2023 }}
                        period={4}
                    />
                </Flex>
            )}
        </div>
    );
};
