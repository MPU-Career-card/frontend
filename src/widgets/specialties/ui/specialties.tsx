import {
    Flex, Text, Card, Tabs, Tab, SpecialityCard,
} from 'shared/ui';

import React, { FC, useState } from 'react';
import { cn, useWindowDimensions } from 'shared/lib';

import { Routes } from 'shared/config';
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
                        <Text size="m" color={tab === '1' ? 'white' : 'black'}>
                            Бакалавриат и специалитет
                        </Text>
                    </Tab>
                    <Tab
                        value="2"
                        roundedSide={['xs', 's', 'm'].includes(sizeCategory) ? 'left' : ''}
                    >
                        <Text size="m" color={tab === '2' ? 'white' : 'black'}>
                            Магистратура
                        </Text>
                    </Tab>
                    <Tab roundedSide="right" value="3">
                        <Text size="m" color={tab === '3' ? 'white' : 'black'}>
                            ДПО
                        </Text>
                    </Tab>
                </Tabs>
            </div>
            {tab === '1' && (
                <Flex
                    gap={24}
                    direction={
                        ['m', 'l'].includes(sizeCategory)
                            ? 'horizontal' : 'vertical'
                    }
                >
                    <Flex
                        gap={22}
                        direction={
                            ['xs', 's', 'm', 'l'].includes(sizeCategory)
                                ? 'vertical' : 'horizontal'
                        }
                    >
                        <SpecialityCard
                            to={Routes.MAIN}
                            faculty="Факультет экономики и управления"
                            name="Управление бизнес-процессами (Менеджмент)"
                            budgetPlacesCount={{ value: 7, year: 2023 }}
                            passingScore={{ value: 298, year: 2022 }}
                            price={{ value: 268230, year: 2023 }}
                            period={4}
                        />
                        <SpecialityCard
                            to={Routes.MAIN}
                            faculty="Факультет экономики и управления"
                            name="Управление бизнес-процессами (Менеджмент)"
                            budgetPlacesCount={{ value: 7, year: 2023 }}
                            passingScore={{ value: 298, year: 2022 }}
                            price={{ value: 268230, year: 2023 }}
                            period={4}
                        />
                        <SpecialityCard
                            to={Routes.MAIN}
                            faculty="Факультет экономики и управления"
                            name="Управление бизнес-процессами (Менеджмент)"
                            budgetPlacesCount={{ value: 7, year: 2023 }}
                            passingScore={{ value: 298, year: 2022 }}
                            price={{ value: 268230, year: 2023 }}
                            period={4}
                        />
                    </Flex>
                    <Flex
                        gap={22}
                        direction={
                            ['xs', 's', 'm', 'l'].includes(sizeCategory)
                                ? 'vertical' : 'horizontal'
                        }
                    >
                        <SpecialityCard
                            to={Routes.MAIN}
                            faculty="Факультет экономики и управления"
                            name="Управление бизнес-процессами (Менеджмент)"
                            budgetPlacesCount={{ value: 7, year: 2023 }}
                            passingScore={{ value: 298, year: 2022 }}
                            price={{ value: 268230, year: 2023 }}
                            period={4}
                        />
                        <SpecialityCard
                            to={Routes.MAIN}
                            faculty="Факультет экономики и управления"
                            name="Управление бизнес-процессами (Менеджмент)"
                            budgetPlacesCount={{ value: 7, year: 2023 }}
                            passingScore={{ value: 298, year: 2022 }}
                            price={{ value: 268230, year: 2023 }}
                            period={4}
                        />
                        <SpecialityCard
                            to={Routes.MAIN}
                            faculty="Факультет экономики и управления"
                            name="Управление бизнес-процессами (Менеджмент)"
                            budgetPlacesCount={{ value: 7, year: 2023 }}
                            passingScore={{ value: 298, year: 2022 }}
                            price={{ value: 268230, year: 2023 }}
                            period={4}
                        />
                    </Flex>
                </Flex>
            )}
            {tab === '2' && (
                <Flex gap={24}>
                    <Card
                        title="Распределение задач между членами команды"
                        text="Коммуникация"
                        image="a"
                    />
                    <Card
                        title="Распределение задач между членами команды"
                        text="Коммуникация "
                        image="a"
                    />
                </Flex>
            )}

        </div>
    );
};
