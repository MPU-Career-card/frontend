/* eslint-disable max-len */
import { Flex, Text } from 'shared/ui';

import React, { FC, useState } from 'react';
import { cn, useWindowDimensions } from 'shared/lib';
import { CareerPointer } from 'shared/icons/careerPointer';

import { MapProps } from './types';

import styles from './map.module.scss';

export const Map: FC<MapProps> = ({
    marginTop,
    marginBottom,
    pointers,
}) => {
    const [selectedPointerIndex, setSelectedPointerIndex] = useState<number>(0);
    const size = useWindowDimensions();

    const colorMap = ['#0039F7', '#C766FF', '#80C528', '#EB6ECF', '#DD8E46', '#3ABBC4'];
    const classNameMap = ['firstPointer', 'secondPointer', 'thirdPointer', 'forthPointer', 'fifthPointer'];

    const changePointer = (index: number) => () => {
        setSelectedPointerIndex(index);
    };

    return (
        <div
            className={cn(styles.map)}
            style={{ marginTop, marginBottom }}
        >
            <Text size="xl2" color="white">
                Карьерный путь
            </Text>
            <Flex
                marginTop={['xs', 's', 'm'].includes(size) ? 50 : 20}
                direction={
                    ['xs', 's', 'm'].includes(size)
                        ? 'vertical' : 'horizontal'
                }
                gap={['xs', 's', 'm'].includes(size) ? 50 : 130}
            >
                <div className={cn(
                    styles.mapContainer,
                    styles[size],
                )}
                >
                    {pointers.map(({ title }, index) => (
                        <button
                            type="button"
                            onClick={changePointer(index)}
                            className={cn(styles.pointer, styles[index === pointers.length - 1 ? 'lastPointer' : classNameMap[index]])}
                            key={title}
                        >
                            <CareerPointer
                                className={cn({
                                    [styles.opacity]: selectedPointerIndex !== index,
                                })}
                                fill={colorMap[index]}
                            />
                            <Text size="l" color={selectedPointerIndex === index ? 'white' : 'greyTransparent'} breakWords>
                                {title}
                            </Text>
                        </button>
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" width="537" height="352" viewBox="0 0 537 352" fill="none">
                        <path
                            d="M10.0586 350.594C10.0586 350.594 -38.3476 216.094 89.2042 216.094C377.35 216.094 3.18767 61.5525 274.373 62.8458C545.559 64.1391 221.204 194.094 461.204 194.094C649.704 194.094 418.704 50.0946 461.205 0.595122"
                            stroke="white"
                            strokeLinecap="round"
                            strokeDasharray="16 16"
                        />
                    </svg>
                </div>
                <Flex direction="vertical" gap={24} align="start">
                    <div>
                        <Text size="l" color="white">
                            {pointers[selectedPointerIndex].title}
                        </Text>
                        <Text size="l" color="pink">
                            {pointers[selectedPointerIndex].salary}
                        </Text>
                    </div>
                    <Text color="white">
                        {pointers[selectedPointerIndex].description}
                    </Text>
                </Flex>
            </Flex>
        </div>
    );
};
