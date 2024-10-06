import { Text, Card } from 'shared/ui';
import React, { FC } from 'react';
import { SkillsProps } from './types';
import styles from './skills.module.scss';

export const Skills: FC<SkillsProps> = ({
    marginTop,
    marginBottom,
    skills,
}) => (
    <div className={styles.wrapper} style={{ marginTop, marginBottom }}>
        <Text size="xl2" className={styles.title}>
            Необходимые навыки
        </Text>
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
    </div>
);
