import {
    Flex, Text,
} from 'shared/ui';

import React, { FC } from 'react';
import { cn } from 'shared/lib';

import { Routes } from 'shared/config';
import { Logo } from 'shared/icons';

import { Link } from 'react-router-dom';

import { FooterProps } from './types';
import styles from './footer.module.scss';

export const Footer: FC<FooterProps> = ({
    marginTop,
    marginBottom,
}) => (
    <Flex
        className={cn(styles.footer)}
        marginTop={marginTop}
        marginBottom={marginBottom}
        justify="center"
    >
        <Link to={Routes.MAIN}>
            <Flex gap={8}>
                <Logo />
                <Text
                    color="white"
                    weight="bold"
                    size="m"
                    caps
                >
                    Карьерные карты
                </Text>
            </Flex>
        </Link>
    </Flex>
);
