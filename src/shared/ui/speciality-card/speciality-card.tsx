import React, { FC } from 'react';

import {
    CardLink,
    Flex,
    Tag,
    Text,
} from 'shared/ui';

import { SpecialityCardProps } from './types';

import styles from './speciality-card.module.scss';

export const SpecialityCard: FC<SpecialityCardProps> = ({
    to,
    faculty,
    name,
    className,
    isResponsiveHeight = false,
}) => (
    <CardLink
        to={to}
        color="white"
        isResponsiveHeight={isResponsiveHeight}
        className={className}
        linkTag="a"
    >
        <Flex
            className={styles.header}
            direction="vertical"
            align="start"
            gap={26}
        >
            <Tag color="gray" size="s">{faculty}</Tag>
            <Text size="l" weight="semi">{name}</Text>
        </Flex>
        <div />
    </CardLink>
);
