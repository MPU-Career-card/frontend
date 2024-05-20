import { FC } from 'react';

import {
    Text,
    ProCard,
    PartnerCard,
} from 'shared/ui';

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
                {partners.map(({ to, image, name }) => (
                    <PartnerCard
                        to={to}
                        name={name}
                        image={image}
                    />
                ))}
            </div>
            <ProCard
                to="https://mospolytech.ru/obuchauschimsya/trudoustrojstvo/"
                color="blue"
                header="Подробнее о партнерах Московского Политеха"
                body="Узнать о возможности прохождения практики и стажировки"
            />
        </div>
    </div>
);
