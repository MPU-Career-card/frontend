/* eslint-disable max-len */
import { cn } from 'shared/lib';

import {
    Flex, Text, Card, Tabs, Tab, Input, Accordion, Tag,
} from 'shared/ui';

import React, { useState } from 'react';
import styles from './specialties-accordions.module.scss';

export const SpecialtiesAccordions = () => {
    const [tab, setTab] = useState('1');

    return (
        <div
            className={cn(styles.specialtiesAccordions)}
        >
            <Tabs value={tab} onClick={setTab}>
                <Tab roundedSide="left" value="1">
                    <Text size="m" color={tab === '1' ? 'white' : 'black'}>
                        Cпециальности
                    </Text>
                </Tab>
                <Tab roundedSide="right" value="2">
                    <Text size="m" color={tab === '2' ? 'white' : 'black'}>
                        Профессии
                    </Text>
                </Tab>
            </Tabs>
            {tab === '1' && (
                <Flex direction="vertical" className={styles.tabs}>
                    <Input
                        placeholder="Поиск по специальностям"
                        icon
                        border
                    />
                    <Accordion
                        tags={(
                            <Flex gap={8}>
                                <Tag
                                    weight="semi"
                                    color="orange"
                                    textColor="white"
                                >
                                    ПИ
                                </Tag>
                                <Tag weight="medium">
                                    29.03.03
                                </Tag>
                            </Flex>
                        )}
                        text="Дизайн и технологии производства визуального контента"
                    >
                        <Flex gap={24}>
                            <Card
                                title="Распределение задач между членами команды"
                                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                                image="a"
                            />
                            <Card
                                title="Распределение задач между членами команды"
                                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                                image="a"
                            />
                            <Card
                                title="Распределение задач между членами команды"
                                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                                image="a"
                            />
                            <Card
                                title="Распределение задач между членами команды"
                                text="Коммуникация — один из важных процессов, который обеспечивает успех проекта"
                                image="a"
                            />
                        </Flex>
                    </Accordion>
                </Flex>
            )}
            {tab === '2' && (
                <Flex direction="vertical" className={styles.tabs}>
                    <Input
                        placeholder="Поиск по профессиям"
                        icon
                        border
                    />
                    <Accordion
                        tags={(
                            <Flex gap={8}>
                                <Tag
                                    weight="semi"
                                    color="orange"
                                    textColor="white"
                                >
                                    ПИ
                                </Tag>
                                <Tag weight="medium">
                                    29.03.03
                                </Tag>
                            </Flex>
                        )}
                        text="Дизайн и технологии производства визуального контента"
                    >
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
                    </Accordion>
                </Flex>
            )}

        </div>
    );
};
