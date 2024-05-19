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
            <Flex justify="space-between">
                {title && (
                    <Text
                        color="dark-gray"
                        size="s"
                        weight="semi"
                    >
                        {title}
                    </Text>
                )}
                {image
                  && (
                      <img
                          src={image}
                          alt="skill"
                      />
                  )}
            </Flex>
        )}
        {text && (
            <Text color="black" size="xs" weight="regular">
                {text}
            </Text>
        )}
    </div>
);
