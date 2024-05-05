import React, { FC } from 'react';

import {
    Flex,
    Input,
    Accordion,
    Tag,
    ProCard,
} from 'shared/ui';
import { SearchIcon } from 'shared/icons';
import { cn } from 'shared/lib';

import { SpecialtiesAccordionsProps } from './types';

import styles from './specialties-accordions.module.scss';

export const SpecialtiesAccordions: FC<SpecialtiesAccordionsProps> = ({
    specialities,
    marginTop,
    marginBottom,
}) => (
    <div
        className={cn(styles.specialtiesAccordions)}
        style={{ marginTop, marginBottom }}
    >
        <Flex
            direction="vertical"
            className={styles.tabs}
        >
            <Input
                icon={<SearchIcon />}
                placeholder="Поиск по профессиям и специальностям"
            />
            {specialities.map(({
                id,
                name,
                color,
                tiker,
                code,
                professions,
            }) => (
                <Accordion
                    key={id}
                    text={name}
                    tags={(
                        <Flex gap={8}>
                            <Tag
                                weight="semi"
                                textColor="white"
                                style={{ backgroundColor: `#${color}` }}
                            >
                                {tiker}
                            </Tag>
                            <Tag weight="medium">
                                {code}
                            </Tag>
                        </Flex>
                    )}
                >
                    <div className={styles.cards}>
                        {professions.map(({ id, name, description }) => (
                            <ProCard
                                key={id}
                                to="/Конструктор%20упаковочных%20решений"
                                color="white"
                                header={name}
                                body={description}
                            />
                        ))}
                    </div>
                </Accordion>
            ))}
        </Flex>
    </div>
);
