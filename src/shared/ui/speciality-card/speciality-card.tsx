import React, { FC } from 'react';

import {
    CardLink,
    Flex,
    Tag,
    Text,
} from 'shared/ui';

import { useWindowDimensions } from 'shared/lib';
import { Arrow } from 'shared/icons';
import { SpecialityCardProps } from './types';

import styles from './speciality-card.module.scss';

export const SpecialityCard: FC<SpecialityCardProps> = ({
    to,
    faculty,
    name,
    className,
    isResponsiveHeight = false,
}) => {
    const sizeCategory = useWindowDimensions();
    return (
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
            {['xs', 's', 'm'].includes(sizeCategory) && (
                <Flex className={styles.mobileLink} justify="space-between">
                    <Text color="white" size="m">
                        Узнать подробнее
                    </Text>
                    <Arrow
                        fill="white"
                        style={{ width: '20px', height: '20px' }}
                    />
                </Flex>
            )}
        </CardLink>
    );
};
