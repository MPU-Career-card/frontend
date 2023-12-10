import {
    Flex, Text, Card,
} from 'shared/ui';

import React, { FC } from 'react';
import { cn, useWindowDimensions } from 'shared/lib';
import { CardsProps } from './types';
import styles from './cards.module.scss';

export const Cards: FC<CardsProps> = ({
    marginTop,
    marginBottom,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <div style={{ marginTop, marginBottom }}>
            {['xs', 's', 'm'].includes(sizeCategory) && (
                <Text size="xl2">
                    Необходимые навыки
                </Text>
            )}
            <Flex
                className={cn(styles.scroll)}
                gap={48}
                direction={
                    ['m'].includes(sizeCategory)
                        ? 'horizontal' : 'vertical'
                }
                marginTop={['xs', 's', 'm'].includes(sizeCategory) ? 32 : 0}
                align="start"
            >
                {['xl', 'l'].includes(sizeCategory) && (
                    <Text size="xl2">
                        Необходимые навыки
                    </Text>
                )}
                <Flex
                    align="start"
                    gap={24}
                    direction={
                        ['xs', 's', 'm'].includes(sizeCategory)
                            ? 'vertical' : 'horizontal'
                    }
                >
                    {sizeCategory === 'xxl' && (
                        <Text size="xl2">
                            Необходимые навыки
                        </Text>
                    )}
                    <Card
                        title="Исследовать рынок и аудиторию"
                        // eslint-disable-next-line max-len
                        text="Научитесь проводить интервью с целевой аудиторией и строить пути пользователей (CJM). Сможете понять потребности клиентов."
                        image="a"
                    />
                    <Card
                        title="Делать продукты прибыльными"
                        // eslint-disable-next-line max-len
                        text="Проанализируете рынок, рассчитаете юнит-экономику. Поймёте, как монетизировать продукт и вывести показатели в плюс."
                        image="a"
                    />
                    <Card
                        title="Запускать тестовую версию продукта"
                        // eslint-disable-next-line max-len
                        text="Создадите минимально жизнеспособный продукт (MVP), протестируете его на клиентах и подтвердите свои гипотезы."
                        image="a"
                    />
                </Flex>
                <Flex
                    gap={24}
                    direction={
                        ['xs', 's', 'm'].includes(sizeCategory)
                            ? 'vertical' : 'horizontal'
                    }
                >
                    <Card
                        title="Управлять командой"
                        // eslint-disable-next-line max-len
                        text="Освоите гибкую методологию разработки (Agile). Научитесь выстраивать рабочие процессы внутри команд и разовьёте эмоциональный интеллект."
                        image="a"
                    />
                    <Card
                        title="Работать с инструментами аналитики"
                        // eslint-disable-next-line max-len
                        text="Научитесь анализировать метрики продукта — распознавать проблемы, находить точки роста, строить прогнозы. Сможете развивать продукт."
                        image="a"
                    />
                    <Card
                        title="Развивать и масштабировать продукт"
                        // eslint-disable-next-line max-len
                        text="Поймёте, как строить стратегии и планы по развитию продукта. Сможете грамотно презентовать идеи заказчику и команде."
                        image="a"
                    />

                </Flex>
            </Flex>
        </div>
    );
};
