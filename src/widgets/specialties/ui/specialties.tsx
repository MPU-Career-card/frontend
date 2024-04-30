/* eslint-disable max-len */

import React, { FC, useState } from 'react';

import { Text, Tabs, Tab } from 'shared/ui';
import { cn, useWindowDimensions } from 'shared/lib';

import { SpecialityContent } from './speciality-content';
import { SpecialtiesProps } from './types';

import styles from './specialties.module.scss';

export const Specialties: FC<SpecialtiesProps> = ({
    marginTop,
    marginBottom,
    bachelors,
    masters,
    dpo,
}) => {
    const [tab, setTab] = useState<string>('1');
    const sizeCategory = useWindowDimensions();

    return (
        <div
            className={cn(styles.specialties)}
            style={{ marginTop, marginBottom }}
        >
            <Text size="xl2">
                Программы обучения
            </Text>
            <div className={cn(styles.tabs)}>
                <Tabs value={tab} onClick={setTab} small={['xs', 's', 'm'].includes(sizeCategory)}>
                    <Tab
                        roundedSide="left"
                        rounded={['xs', 's', 'm'].includes(sizeCategory)}
                        value="1"
                    >
                        <Text size="m" color={tab === '1' ? 'white' : 'black'}>
                            Бакалавриат и специалитет
                        </Text>
                    </Tab>
                    <Tab
                        value="2"
                        roundedSide={['xs', 's', 'm'].includes(sizeCategory) ? 'left' : ''}
                    >
                        <Text size="m" color={tab === '2' ? 'white' : 'black'}>
                            Магистратура
                        </Text>
                    </Tab>
                    <Tab roundedSide="right" value="3">
                        <Text size="m" color={tab === '3' ? 'white' : 'black'}>
                            ДПО
                        </Text>
                    </Tab>
                </Tabs>
            </div>
            <SpecialityContent
                tab={tab}
                bachelors={bachelors}
                masters={masters}
                dpo={dpo}
            />
        </div>
    );
};
