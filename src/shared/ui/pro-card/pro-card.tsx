import React, { FC, useMemo } from 'react';

import { Flex, Text, Tag } from 'shared/ui';

import { CardLink } from '../card-link';
import { ProCardProps } from './types';

import styles from './pro-card.module.scss';

export const ProCard: FC<ProCardProps> = ({
    to,
    color,
    body,
    header,
    tags,
    isResponsiveHeight = false,
}) => {
    const textColor = useMemo(() => {
        if (['purple', 'blue'].includes(color)) {
            return 'white';
        }

        return 'black';
    }, [color]);

    const tagColor = useMemo(() => {
        if (['white'].includes(color)) {
            return 'gray';
        }

        return 'white';
    }, [color]);

    return (
        <CardLink to={to} color={color} isResponsiveHeight={isResponsiveHeight}>
            <Flex
                className={styles.content}
                align="start"
                direction="vertical"
                gap={44}
            >
                {header && (
                    <Text
                        size="l"
                        weight="semi"
                        color={textColor}
                    >
                        {header}
                    </Text>
                )}
                {body && (
                    <Text
                        size="s"
                        weight="regular"
                        color={textColor}
                    >
                        {body}
                    </Text>
                )}
            </Flex>
            <Flex gap={8} justify="end">
                {tags?.map((tag) => (
                    <Tag size="xs" color={tagColor}>
                        {tag}
                    </Tag>
                ))}
            </Flex>
        </CardLink>
    );
};
