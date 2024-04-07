import {
    Flex,
    Text,
    ProCard,
    Card, PartnerCard,
} from 'shared/ui';

import { useWindowDimensions } from 'shared/lib';
import React, { FC } from 'react';
import { Routes } from 'shared/config';
import { PartnersProps } from './types';
import styles from './partners.module.scss';

export const Partners: FC<PartnersProps> = ({
    marginTop,
    marginBottom,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <Flex
            className={styles.partners}
            gap={32}
            direction="vertical"
            align="start"
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <Text size="xl2">
                Партнеры
            </Text>
            <Flex
                className={styles.partnersContent}
                align="stretch"
                gap={24}
                direction={
                    ['xs', 's', 'm', 'l'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
            >
                <div className={styles.cards}>
                    <PartnerCard
                        to="https://www.mosobl.kp.ru/"
                        image={`${process.env.PUBLIC_URL}/assets/kp.jpg`}
                    />
                    <PartnerCard
                        to="https://mdk-arbat.ru/"
                        image={`${process.env.PUBLIC_URL}/assets/mdk.png`}
                    />
                    <PartnerCard
                        to="http://ripol.ru/"
                        image={`${process.env.PUBLIC_URL}/assets/ripol.svg`}
                    />
                    <PartnerCard
                        to="https://rg.ru/"
                        image={`${process.env.PUBLIC_URL}/assets/rg.png`}
                    />
                    <PartnerCard
                        to="https://vm.ru/"
                        image={`${process.env.PUBLIC_URL}/assets/vm.svg`}
                    />
                    <PartnerCard
                        to="https://www.biblio-globus.ru/"
                        image={`${process.env.PUBLIC_URL}/assets/globus.png`}
                    />
                </div>
                <ProCard
                    to={Routes.MAIN}
                    color="blue"
                    header="Все партнёры Московского Политеха"
                    body="Пара слов о трудоустройстве студентов
                      Московского Политеха в компании партнёров"
                />
            </Flex>
        </Flex>
    );
};
