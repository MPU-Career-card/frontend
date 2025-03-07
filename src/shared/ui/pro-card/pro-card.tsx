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
    footer,
    isResponsiveHeight = false,
    isFullWidth = false,
    isFullHeight = false,
    isMobileProps = false,
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
        <CardLink
            to={to}
            color={color}
            isResponsiveHeight={isResponsiveHeight}
            isFullWidth={isFullWidth}
            isFullHeight={isFullHeight}
        >
            <Flex
                className={styles.content}
                align="start"
                direction="vertical"
                gap={16}
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
                {footer && (
                    <Text size="m" weight="bold" color={textColor}>
                        {footer}
                    </Text>
                )}

            </Flex>
            <Flex className={styles.footer} gap={8} justify="end">
                {tags?.map((tag) => (
                    <Tag size="xs" color={tagColor}>
                        {tag}
                    </Tag>
                ))}
            </Flex>
        </CardLink>
    );
};
