import { Link } from 'react-router-dom';
import React, { FC } from 'react';

import { Image, Text } from 'shared/ui';

import { PartnerCardProps } from './types';

import styles from './partner-card.module.scss';

export const PartnerCard: FC<PartnerCardProps> = ({
    to,
    image,
    name,
}) => (
    <Link
        to={to}
        className={styles.card}
    >
        <Image
            className={styles.image}
            src={image}
            alt={<Text>{name}</Text>}
        />
    </Link>
);
