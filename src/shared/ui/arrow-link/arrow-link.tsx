import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Arrow } from 'shared/icons';
import { cn } from 'shared/lib';

import { ArrowLinkProps } from './types';

import styles from './arrow-link.module.scss';
import { Color } from '../../types';

export const ArrowLink: FC<ArrowLinkProps> = ({
    width = 64,
    to,
    color,
    className,
    linkTag = 'link',
}) => {
    const getArrowColor = (color: Color) => {
        if (['yellow', 'transparent', 'silver', 'white'].includes(color)) {
            return 'black';
        }

        return 'white';
    };

    const content = (
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
