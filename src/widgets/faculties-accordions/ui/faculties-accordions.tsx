import React, { FC } from 'react';

import {
    Flex,
    Input,
    Accordion,
    Tag,
} from 'shared/ui';
import { SearchIcon } from 'shared/icons';
import { cn } from 'shared/lib';

import { SpecialtiesCards } from '../../specialties-cards';

import { SpecialtiesAccordionsProps } from './types';

import styles from './faculties-accordions.module.scss';

export const FacultiesAccordions: FC<SpecialtiesAccordionsProps> = ({
    specialities,
    marginTop,
    marginBottom,
    getSpecialities,
    onSearchInputChange,
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
                onChange={onSearchInputChange}
            />
            {Object.entries(specialities).map(([faculty, speciality]) => (
                <Accordion
                    key={faculty}
                    text={faculty}
                    onOpen={() => getSpecialities(faculty)}
                >
                    {
                        speciality.map(({
                            id,
                            code,
                            color,
                            name,
                            professions,
                        }) => (
                            <Accordion
                                key={id}
                                text={name}
                                tags={(
                                    <Tag
                                        textColor="white"
                                        style={{ backgroundColor: `#${color}` }}
                                    >
                                        {code}
                                    </Tag>
                                )}
                            >
                                <SpecialtiesCards professions={professions} />
                            </Accordion>
                        ))
                    }
                </Accordion>
            ))}
        </Flex>
    </div>
);
