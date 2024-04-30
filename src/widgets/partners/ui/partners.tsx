import {
    Text,
    ProCard,
    PartnerCard,
} from 'shared/ui';

import { FC } from 'react';
import { Routes } from 'shared/config';
import { PartnersProps } from './types';
import styles from './partners.module.scss';

export const Partners: FC<PartnersProps> = ({
    marginTop,
    marginBottom,
    partners,
}) => (
    <div style={{ marginTop, marginBottom }}>
        <Text size="xl2" className={styles.title}>
            Партнеры
        </Text>
        <div className={styles.grid}>
            <div className={styles.cards}>
                {partners.map(({ to, image }) => (
                    <PartnerCard
                        to={to}
                        image={image}
                    />
                ))}
            </div>
            <ProCard
                to={Routes.MAIN}
                color="blue"
                header="Все партнёры Московского Политеха"
                body="Пара слов о трудоустройстве студентов
                      Московского Политеха в компании партнёров"
            />
        </div>
    </div>
);
