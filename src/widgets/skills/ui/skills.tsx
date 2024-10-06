import {
    Text, Card, Flex, Scroll,
} from 'shared/ui';
import React, { FC } from 'react';
import { cn, useWindowDimensions } from 'shared/lib';
import { SkillsProps } from './types';
import styles from './skills.module.scss';

export const Skills: FC<SkillsProps> = ({
    marginTop,
    marginBottom,
    skills,
}) => {
    const sizeCategory = useWindowDimensions();

    return (
        <div style={{ marginTop, marginBottom }}>
            <Text size="xl2" className={styles.title}>
                Необходимые навыки
            </Text>
            <Flex
                className={cn(styles.scroll)}
                align="start"
                gap={24}
            >
                {['xs', 's', 'm'].includes(sizeCategory) && (
                    <Scroll gap={24}>
                        {skills.map(({ title, description, image }) => (
                            <Card
                                width={300}
                                key={title}
                                title={title}
                                text={description}
                                image={image}
                            />
                        ))}
                    </Scroll>
                )}
                {['xxl', 'xl', 'l'].includes(sizeCategory) && (
                    <div className={styles.cardContainer}>
                        {skills.map(({ title, description, image }) => (
                            <Card
                                key={title}
                                title={title}
                                text={description}
                                image={image}
                            />
                        ))}
                    </div>
                )}
            </Flex>
        </div>
    );
};
