import { Link } from 'react-router-dom';
import React, { FC } from 'react';

import { Flex } from 'shared/ui';

import { PartnerCardProps } from './types';

import styles from './partner-card.module.scss';

export const PartnerCard: FC<PartnerCardProps> = ({
    to,
    image,
}) => (
    <Link
        to={to}
        className={styles.card}
    >
        <img className={styles.image} src={image} alt={to} />
    </Link>
);
