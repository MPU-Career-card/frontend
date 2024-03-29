import React, { FC, useState } from 'react';

import {
    Flex,
    Text,
    Card,
    Tabs,
    Tab,
    Input,
    Accordion,
    Tag,
} from 'shared/ui';
import { SearchIcon } from 'shared/icons';
import { cn } from 'shared/lib';

import data from 'pages/specialties/specialties.json';

import { SpecialtiesAccordionsProps } from './types';

import styles from './specialties-accordions.module.scss';

interface AccordionData {
    tags: string[];
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

            {data.tabs.map((tabData) => (
                // Render accordions based on the selected tab
                tab === tabData.id && (
                    <Flex
                        key={tabData.id}
                        direction="vertical"
                        className={styles.tabs}
                    >
                        <Input
                            icon={<SearchIcon />}
                            placeholder={
                                `Поиск по ${tabData.label.toLowerCase()}`
                            }
                        />
                        {tabData.content.map((
                            accordionData: AccordionData,
                            accordionIndex: number,
                        ) => (
                            <Accordion
                                key={accordionData.text || accordionIndex}
                                tags={(
                                    <Flex gap={8}>
                                        {accordionData.tags.map((
                                            tag: string,
                                            tagIndex: number,
                                        ) => (
                                            <Tag
                                                key={tag || tagIndex}
                                                weight={tagIndex === 0 ? 'semi' : 'medium'}
                                                color={tagIndex === 0 ? 'orange' : undefined}
                                                textColor={tagIndex === 0 ? 'white' : undefined}
                                            >
                                                {tag}
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
