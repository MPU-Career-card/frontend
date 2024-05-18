import React, { FC } from 'react';

import { ProCard } from 'shared/ui';

import { SpecialtiesCardsProps } from './types';

import styles from './specialties-cards.module.scss';

export const SpecialtiesCards: FC<SpecialtiesCardsProps> = ({
    professions,
    marginTop,
    marginBottom,
}) => (
    <div
        className={styles.cards}
        style={{ marginTop, marginBottom }}
    >
        {professions.map(({
            id,
            name,
            description,
        }) => (
            <ProCard
                key={id}
                to={`/${name}`}
                color="white"
                header={name}
                body={description}
            />
        ))}
    </div>
);
