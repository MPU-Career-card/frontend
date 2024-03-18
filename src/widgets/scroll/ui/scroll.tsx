import {
    Scroll as ScrollComponent, Flex, Text, Card,
} from 'shared/ui';

import { cn, useWindowDimensions } from 'shared/lib';
import React, { FC } from 'react';
import { ScrollProps } from './types';
import styles from './scroll.module.scss';

export const Scroll: FC<ScrollProps> = ({
    marginTop,
    marginBottom,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <div style={{ marginTop, marginBottom }}>
            {['xs', 's', 'm'].includes(sizeCategory) && (
                <Text size="xl2" className={styles.header}>
                    Основные задачи
                </Text>
            )}
            <Flex
                className={cn(styles.scroll)}
                align="start"
                gap={24}
            >
                {['xxl', 'xl', 'l'].includes(sizeCategory) && (
                    <Text size="xl2">
                        Основные задачи
                    </Text>
                )}
                <ScrollComponent gap={24}>
                    <Card
                        width={300}
                        title="Поиск интересной и актуальной информации"
                        text="Корреспондент должен чувствовать и понимать,
                        какая информация приоритетна в его СМИ, учитывая
                        формат канала, газеты или радио."
                    />
                    <Card
                        width={300}
                        title="Установление контактов с авторитетными источниками"
                        text="Достоверность и весомость материалу придают
                        представители государственных органов, узкоспециализированные
                        специалисты и люди, напрямую связанные с затронутой в сюжете
                        или статье теме. Именно с ними необходимо предварительно
                        договариваться о возможности взять интервью."
                    />
                    <Card
                        width={300}
                        title="Выезд на место и сбор материала"
                        text="Сбор информации включает в себя общение с
                        организаторами, участниками мероприятия, интервьюирование на объекте."
                    />
                    <Card
                        width={300}
                        title="Обработка собранной информации"
                        text="Изучение и выборка того материала, который будет
                        использоваться в конечном продукте, может занимать
                        много времени, если предварительно не продумывать концепцию."
                    />
                    <Card
                        width={300}
                        title="Подача материала в различных форматах"
                        text="В зависимости от задач, поставленных главным редактором,
                        корреспондент должен преподнести обработанную информацию
                        в виде фоторепортажа, интервью, очерка, видеосюжета или публикации."
                    />
                </ScrollComponent>
            </Flex>
        </div>
    );
};
