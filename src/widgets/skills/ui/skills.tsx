/* eslint-disable max-len */
import {
    Flex, Text, Card,
} from 'shared/ui';

import React, { FC } from 'react';
import { cn, useWindowDimensions } from 'shared/lib';

import { SkillsProps } from './types';

import styles from './skills.module.scss';

export const Skills: FC<SkillsProps> = ({
    marginTop,
    marginBottom,
    skills,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <div className={styles.wrapper} style={{ marginTop, marginBottom }}>
            <Text size="xl2">
                Необходимые навыки
            </Text>
            {skills.map(({ title, description, image }) => (
                <Card
                    key={title}
                    title={title}
                    text={description}
                    image={`${process.env.PUBLIC_URL}/${image}`}
                />
            ))}
        </div>
    );
};
