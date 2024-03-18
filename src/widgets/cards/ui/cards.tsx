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
                        // eslint-disable-next-line max-len
                        text="Важно уметь не только находить и обобщать материал, но делать это грамотно, в соответствии с правилами русского языка."
                    />
                    <Card
                        title="Работа с текстом"
                        // eslint-disable-next-line max-len
                        text="Большую часть своей работы корреспондент проводит наедине с текстом, поэтому он должен уметь обрабатывать текстовые материалы и обобщать собранную информацию  в сжатую форму."
                    />
                    <Card
                        title="Мобильность"
                        // eslint-disable-next-line max-len
                        text="За один день корреспондент может посетить несколько мероприятий. Часто это ночные или утренние выезды в нерабочее время. Работа в выходные и праздничные дни также не редкость. Поэтому нужно быть готовым к ненормированному графику."
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
                        // eslint-disable-next-line max-len
                        text="Зачастую корреспонденту приходится искать интересные факты и неординарную информацию в обыденных и привычных новостях. Также корреспондент должен «гореть» каждым материалом и «проживать» каждую деталь того, о чем пишет. Это помогает писать не сырые, а вполне увлекательные материалы."
                    />
                    <Card
                        title="Проведение интервью"
                        // eslint-disable-next-line max-len
                        text="При проведении интервью корреспонденты должны соблюдать определенные этические принципы, чтобы обеспечить справедливость, достоверность и уважение к интервьюируемым лицам."
                    />
                    <Card
                        title="Проверка фактов (фактчекинг)"
                        // eslint-disable-next-line max-len
                        text="Обусловлено во многом этическими принципами, такими, как объективность, независимость, беспристрастность, точность. Именно соблюдение этих принципов позволяет завоевать доверие аудитории и формирует репутацию медиа. Для удостоверения в правдивости информации корреспонденты ищут первоисточники, а также обращаются к экспертам."
                    />
                </Flex>
            </Flex>
        </div>
    );
};
