import {
    Flex,
} from 'shared/ui';

import React, { FC } from 'react';
import { cn } from 'shared/lib';

import { Routes } from 'shared/config';

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
        justify="space-between"
    >
        <div className={cn(styles.footer__logo)}>
            <Link to={Routes.SPECIALITY}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/footer/KK-white_logo.svg`}
                    alt="LogoKK"
                    width="156px"
                />
            </Link>
            <a href="https://mospolytech.ru/">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/footer/Poly-white_logo.svg`}
                    alt="LogoPoly"
                    width="156px"
                />
            </a>
        </div>
        <div className={cn(styles.footer__link)}>
            <a href="https://vk.com/mospolywork">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/footer/VK.svg`}
                    alt="vk"
                    width="42px"
                />
            </a>
            <a href="https://t.me/mospolywork">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/footer/TG.svg`}
                    alt="telegram"
                    width="42px"
                />
            </a>
        </div>
    </Flex>
);
