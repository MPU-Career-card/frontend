/* eslint-disable max-len */
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
                        title="Грамотная речь"
                        text="Важно уметь не только находить и обобщать материал, но делать это грамотно, в соответствии с правилами русского языка."
                        image={`${process.env.PUBLIC_URL}/assets/грамотная_речь.svg`}
                    />
                    <Card
                        title="Работа с текстом"
                        text="Большую часть своей работы корреспондент проводит наедине с текстом, поэтому он должен уметь обрабатывать текстовые материалы и обобщать собранную информацию  в сжатую форму."
                        image={`${process.env.PUBLIC_URL}/assets/работа_с_текстом.svg`}
                    />
                    <Card
                        title="Мобильность"
                        text="За один день корреспондент может посетить несколько мероприятий. Часто это ночные или утренние выезды в нерабочее время. Работа в выходные и праздничные дни также не редкость. Поэтому нужно быть готовым к ненормированному графику."
                        image={`${process.env.PUBLIC_URL}/assets/мобильность.svg`}
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
                        title="Поиск информационных поводов в различных источниках"
                        text="Зачастую корреспонденту приходится искать интересные факты и неординарную информацию в обыденных и привычных новостях. Также корреспондент должен «гореть» каждым материалом и «проживать» каждую деталь того, о чем пишет. Это помогает писать не сырые, а вполне увлекательные материалы."
                        image={`${process.env.PUBLIC_URL}/assets/поиск_информационных_поводов_в_различных_источниках.svg`}
                    />
                    <Card
                        title="Проведение интервью"
                        text="При проведении интервью корреспонденты должны соблюдать определенные этические принципы, чтобы обеспечить справедливость, достоверность и уважение к интервьюируемым лицам."
                        image={`${process.env.PUBLIC_URL}/assets/проведение_интервью.svg`}
                    />
                    <Card
                        title="Проверка фактов (фактчекинг)"
                        text="Обусловлено во многом этическими принципами, такими, как объективность, независимость, беспристрастность, точность. Именно соблюдение этих принципов позволяет завоевать доверие аудитории и формирует репутацию медиа. Для удостоверения в правдивости информации корреспонденты ищут первоисточники, а также обращаются к экспертам."
                        image={`${process.env.PUBLIC_URL}/assets/проверка_фактов.svg`}
                    />
                </Flex>
            </Flex>
        </div>
    );
};
