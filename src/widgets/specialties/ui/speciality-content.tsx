import React, { memo } from 'react';

import { Flex, SpecialityCard } from 'shared/ui';

import { NotFound } from './not-found';
import { SpecialityContentProps } from './types';

import styles from './specialties.module.scss';
import { useWindowDimensions } from '../../../shared/lib';

export const SpecialityContent = memo<SpecialityContentProps>(({
    tab,
    bachelors,
    masters,
    dpo,
}) => {
    const sizeCategory = useWindowDimensions();

    if (tab === '1' && bachelors.length) {
        return (
            <Flex
                align="stretch"
                gap={8}
                direction={
                    ['xs', 's', 'm'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
            >
                {bachelors.map(({ link, speciality, faculty }) => (
                    <SpecialityCard
                        className={styles.card}
                        to={link}
                        faculty={faculty}
                        name={speciality}
                    />
                ))}
            </Flex>
        );
    }

    if (tab === '2' && masters.length) {
        return (
            <Flex
                align="stretch"
                gap={8}
                direction={
                    ['xs', 's', 'm'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
            >
                {masters.map(({ link, speciality, faculty }) => (
                    <SpecialityCard
                        className={styles.card}
                        to={link}
                        faculty={faculty}
                        name={speciality}
                    />
                ))}
            </Flex>
        );
    }

    if (tab === '3' && dpo.length) {
        return (
            <Flex
                align="stretch"
                gap={8}
                direction={
                    ['xs', 's', 'm'].includes(sizeCategory)
                        ? 'vertical' : 'horizontal'
                }
            >
                {dpo.map(({ link, speciality, faculty }) => (
                    <SpecialityCard
                        className={styles.card}
                        to={link}
                        faculty={faculty}
                        name={speciality}
                    />
                ))}
            </Flex>
        );
    }

    return (
        <NotFound />
    );
});
