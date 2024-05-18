import React, { FC } from 'react';

import {
    Flex,
    Input,
    Accordion,
} from 'shared/ui';
import { SearchIcon } from 'shared/icons';
import { cn } from 'shared/lib';

import { SpecialtiesAccordionsProps } from './types';

import styles from './faculties-accordions.module.scss';
import { SpecialtiesCards } from '../../specialties-cards';

export const FacultiesAccordions: FC<SpecialtiesAccordionsProps> = ({
    faculties,
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
            {faculties.map((faculty) => (
                <Accordion
                    key={faculty}
                    text={faculty}
                >
                    <SpecialtiesCards
                        key={faculty}
                        faculty={faculty}
                    />
                </Accordion>
            ))}
        </Flex>
    </div>
);
