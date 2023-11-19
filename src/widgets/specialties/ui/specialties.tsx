import {
    Flex, Text, Card, Tabs, Tab,
} from 'shared/ui';

import React, { FC, useState } from 'react';
import { SpecialtiesProps } from './types';
import styles from './specialties.module.scss';

export const Specialties: FC<SpecialtiesProps> = ({
    marginTop,
    marginBottom,
}) => {
    const [tab, setTab] = useState('1');

    return (
        <div
            className={styles.specialties}
            style={{ marginTop, marginBottom }}
        >
            <Text size="xl2">
                Программы обучения
            </Text>
            <Tabs value={tab} onClick={setTab}>
                <Tab active roundedSide="left" value="1">
                    <Text>Бакалавриат и специалитет</Text>
                </Tab>
                <Tab value="2">
                    <Text>Магистратура</Text>
                </Tab>
                <Tab roundedSide="right" value="3">
                    <Text>ДПО</Text>
                </Tab>
            </Tabs>
            {tab === '1' && (
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
