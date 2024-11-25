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
                align="stretch"
            >
                {links.map(({ to, title }) => (
                    <CardLink
                        to={to}
                        color="yellow"
                        highlight={false}
                        linkTag="a"
                        style={{ border: '1px solid black' }}
                    >
                        <Text size="m" weight="regular" view="gilroy">
                            {title}
                        </Text>
                        <div />
                    </CardLink>
                ))}
            </Flex>
        </Flex>
    );
};
