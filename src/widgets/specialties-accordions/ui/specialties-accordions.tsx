import { cn } from 'shared/lib';

import {
    Flex, Text, Card, Tabs, Tab, Input, Accordion, Tag,
} from 'shared/ui';

import React, { FC, useEffect, useState } from 'react';
import data from 'pages/specialties/specialties.json';
import styles from './specialties-accordions.module.scss';
import { SpecialtiesAccordionsProps } from './types';

interface AccordionData {
    tags: {
        id: string;
        color: string;
        text: string;
        textColor: string;
        width: string;
      }[];
    text: string;
    cards: {
      title: string;
      text: string;
      image: string;
    }[];
  }

export const SpecialtiesAccordions: FC<SpecialtiesAccordionsProps> = ({
    marginTop,
    marginBottom,
}) => {
    const [tab, setTab] = useState('1');
    const [searchTerm, setSearchTerm] = useState('');

    const [filteredTabs, setFilteredTabs] = useState(data.tabs);

    useEffect(() => {
        // Функция для фильтрации данных по введенному поисковому запросу
        const filterData = () => {
            const filteredData = data.tabs.map((tabData) => {
                // eslint-disable-next-line max-len
                const filteredContent = tabData.content.filter((accordionData: AccordionData) => accordionData.text.toLowerCase().includes(searchTerm.toLowerCase()));

                return {
                    ...tabData,
                    content: filteredContent,
                };
            });

            setFilteredTabs(filteredData);
        };

        filterData();
    }, [searchTerm]);

    return (
        <div className={cn(styles.specialtiesAccordions)} style={{ marginTop, marginBottom }}>
            <Tabs value={tab} onClick={setTab}>
                {data.tabs.map((tabData) => (
                    <Tab
                        key={tabData.id}
                        roundedSide={tabData.id === '1' ? 'left' : 'right'}
                        value={tabData.id}
                    >
                        <Text
                            size="m"
                            color={tab === tabData.id ? 'white' : 'black'}
                        >
                            {tabData.label}
                        </Text>
                    </Tab>
                ))}
            </Tabs>

            {filteredTabs.map((tabData) => (
                // Render accordions based on the selected tab
                tab === tabData.id && (
                    <Flex
                        key={tabData.id}
                        direction="vertical"
                        className={styles.tabs}
                    >
                        <Input
                            placeholder={
                                `Поиск по ${tabData.label.toLowerCase()}`
                            }
                            icon
                            border
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {tabData.content.map((
                            accordionData: AccordionData,
                        ) => (
                            <Accordion
                                key={accordionData.text}
                                tags={(
                                    <Flex gap={8}>
                                        {accordionData.tags.map((
                                            tag,
                                        ) => (
                                            <Tag
                                                key={tag.id}
                                                color={tag.color}
                                                textColor={tag.textColor}
                                                width={tag.width}
                                            >
                                                {tag.text}
                                            </Tag>
                                        ))}
                                    </Flex>
                                )}
                                text={accordionData.text}
                            >
                                <Flex gap={24}>
                                    {accordionData.cards.map((
                                        card: {
                                          title: string;
                                          text: string;
                                          image: string
                                        },
                                    ) => (
                                        <Card
                                            key={card.title}
                                            title={card.title}
                                            text={card.text}
                                            image={card.image}
                                        />
                                    ))}
                                </Flex>
                            </Accordion>
                        ))}
                    </Flex>
                )
            ))}
        </div>
    );
};
