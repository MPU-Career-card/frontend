import { FC } from 'react';

import { cn } from 'shared/lib';
import { Logo } from 'shared/icons';
import { Text } from '../text';

import { CardProps } from './types';

import styles from './card.module.scss';
import { Flex } from '../flex';

export const Card: FC<CardProps> = ({
    text,
    title,
    image,
    height,
}) => (
    <div
        className={
            cn(styles.card)
        }
        style={{ height }}
    >
        {title || image ? (
            <Flex gap={8}>
                {title && (
                    <Text
                        color="dark-gray"
                        size="s"
                        weight="semi"
                    >
                        {title}
                    </Text>
                )}
                {image && <Logo />}
            </Flex>
        ) : null}
        {text ? (
            <Text color="black" size="xs" weight="regular">
                {text}
            </Text>
        ) : null}
    </div>
);
