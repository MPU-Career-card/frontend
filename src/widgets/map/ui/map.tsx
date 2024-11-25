/* eslint-disable max-len */
import { Flex, Text } from 'shared/ui';

import React, { FC, useState } from 'react';
import { cn, getShortString, useWindowDimensions } from 'shared/lib';
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
    const classNameMapM = ['firstPointerM', 'secondPointerM', 'thirdPointerM', 'forthPointerM', 'fifthPointerM'];

    const changePointer = (index: number) => () => {
        setSelectedPointerIndex(index);
    };

    return (
        <div
            className={cn(styles.map)}
            style={{ marginTop, marginBottom }}
        >
            <Text size="xl2" color="white" view="gilroy">
                Карьерный путь
            </Text>
            {['xs', 's'].includes(size)
                ? (
                    <Flex direction="vertical" align="start">
                        <div
                            className={cn(
                                styles.mapContainer,
                                styles[size],
                            )}
                            style={{ width: '100%' }}
                        >
                            {pointers.map(({ title }, index) => (
                                <button
                                    type="button"
                                    onClick={changePointer(index)}
                                    className={cn(styles.pointer, styles[classNameMapM[index]])}
                                    key={title}
                                    style={{ display: 'flex', alignItems: 'center', width: '100%' }}
                                >
                                    <CareerPointer
                                        className={cn({
                                            [styles.opacity]: selectedPointerIndex !== index,
                                        })}
                                        style={{
                                            position: 'absolute', top: 0, marginLeft: -49, height: 150, width: 250,
                                        }}
                                        fill={colorMap[index]}
                                    />
                                    <Text
                                        size="xl"
                                        color={selectedPointerIndex === index ? 'white' : 'greyTransparent'}
                                        view="gilroy"
                                        style={{ position: 'absolute', left: 150, top: 40 }}
                                    >
                                        {title}
                                    </Text>
                                </button>
                            ))}
                            <div className={cn(styles.mobilPathIcon)}>
                                <svg width="4" height={pointers.length * 145} viewBox="0 0 4 724" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0L2.00003 724" stroke="#B289CD" strokeWidth="3.66207" strokeDasharray="24.41 24.41" />
                                </svg>
                            </div>
                        </div>

                        <Flex direction="vertical" gap={24} align="start">
                            <div>
                                <Text size="l" color="white" view="gilroy">
                                    {pointers[selectedPointerIndex].title}
                                </Text>
                                <Text
                                    className={cn(styles.salary)}
                                    size={['xs', 's', 'm'].includes(size) ? 's' : 'l'}
                                    color="pink"
                                    view="gilroy"
                                >
                                    {pointers[selectedPointerIndex].salary}
                                </Text>
                            </div>
                            <Text color="white" view="gilroy">
                                {pointers[selectedPointerIndex].description}
                            </Text>
                        </Flex>
                    </Flex>

                )
                : (
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
                                    <Text
                                        size="l"
                                        color={selectedPointerIndex === index ? 'white' : 'greyTransparent'}
                                        view="gilroy"
                                    >
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
                                <Text size="l" color="white" view="gilroy">
                                    {pointers[selectedPointerIndex].title}
                                </Text>
                                <Text
                                    className={cn(styles.salary)}
                                    size={['xs', 's', 'm'].includes(size) ? 's' : 'l'}
                                    color="pink"
                                    view="gilroy"
                                >
                                    {pointers[selectedPointerIndex].salary}
                                </Text>
                            </div>
                            <Text color="white" view="gilroy">
                                {pointers[selectedPointerIndex].description}
                            </Text>
                        </Flex>
                    </Flex>
                )}
        </div>
    );
};
