import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from 'shared/icons';
import { cn } from 'shared/lib';

import { ArrowLinkProps } from './types';

import styles from './arrow-link.module.scss';
import { Color } from '../../types';
import { Flex } from '../flex/flex';
import { Text } from '../text/text';

export const ArrowLink: FC<ArrowLinkProps> = ({
    width = 64,
    to,
    color,
    className,
    linkTag = 'link',
    mobile = false,
}) => {
    const getArrowColor = (color: Color) => {
        if (['yellow', 'transparent', 'silver', 'white'].includes(color)) {
            return 'black';
        }

        return 'white';
    };

    const content = mobile ? (
        <Flex className={styles.mobileLink} justify="space-between">
            <Text color="white" size="m">
                Узнать подробнее
            </Text>
            <Arrow
                fill="white"
                style={{ width: '20px', height: '20px' }}
            />
        </Flex>
    ) : (
        <div
            style={{ width, height: width }}
            className={cn(
                className,
                styles['arrow-link'],
                color,
            )}
        >
            <Arrow
                fill={getArrowColor(color)}
                style={{ width: '25%', height: '25%' }}
            />
        </div>
    );

    return linkTag === 'link'
        ? <Link to={to} target="_blank">{content}</Link>
        : <a href={to} target="_blank" rel="noreferrer">{content}</a>;
};
