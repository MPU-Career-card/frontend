import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from 'shared/icons';
import { cn } from 'shared/lib';

import { ArrowLinkProps } from './types';
import { getArrowColor } from './lib';

import styles from './arrow-link.module.scss';

export const ArrowLink: FC<ArrowLinkProps> = ({
    width = 64,
    to,
    color,
    className,
}) => (
    <Link to={to}>
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
    </Link>
);
