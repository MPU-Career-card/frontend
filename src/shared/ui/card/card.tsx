import { FC } from 'react';

import { Text } from '../text';
import { Flex } from '../flex';

import { CardProps } from './types';

import styles from './card.module.scss';

export const Card: FC<CardProps> = ({
    text,
    title,
    image,
    height,
    width,
}) => (
    <div
        className={styles.card}
        style={{ minHeight: height, minWidth: width }}
    >
        {(title || image) && (
            <Flex gap={8}>
                {title && (
                    <Text
                        color="dark-gray"
                        size="l"
                        weight="semi"
                    >
                        {title}
                    </Text>
                )}
                {image && <img src={image} alt={title} />}
            </Flex>
        )}
        {text && (
            <Text color="black" size="s" weight="regular">
                {text}
            </Text>
        )}
    </div>
);
