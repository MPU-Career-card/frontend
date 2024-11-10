/* eslint-disable max-len */

import React, { FC } from 'react';

import {
    Flex, Text, CardLink,
} from 'shared/ui';
import { useWindowDimensions } from 'shared/lib';

import { LinksProps } from './types';

import styles from './links.module.scss';

export const Links: FC<LinksProps> = ({
    marginTop,
    marginBottom,
    links,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <Flex
            className={styles.links}
            gap={['xs', 's', 'm', 'l'].includes(sizeCategory) ? 0 : 32}
            align="start"
            direction={
                ['xs', 's', 'm', 'l'].includes(sizeCategory)
                    ? 'vertical' : 'horizontal'
            }
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <Text size="xl2" className={styles.header}>
                Полезные ссылки
            </Text>
            <Flex
                gap={32}
                direction={
                    ['xs', 's'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
            >
                {links.map(({ to, title, description }) => (
                    <CardLink
                        to={to}
                        color="yellow"
                        highlight={false}
                        linkTag="a"
                        style={{ marginTop: '20px' }}
                    >
                        <Text size="m" weight="semi" view="gilroy">
                            {title}
                        </Text>
                        <Text>
                            {description}
                        </Text>
                    </CardLink>
                ))}
            </Flex>
        </Flex>
    );
};
