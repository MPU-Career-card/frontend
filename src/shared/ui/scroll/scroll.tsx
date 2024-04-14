import React, {
    ReactElement, FC, cloneElement, useRef,
} from 'react';

import { cn, useWindowDimensions } from 'shared/lib';

import { ScrollArrowIcon } from 'shared/icons';
import { ScrollProps } from './types';

import styles from './scroll.module.scss';

export const Scroll: FC<ScrollProps> = ({
    gap = 5,
    children,
}) => {
    const size = useWindowDimensions();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const childrenArray = React.Children
        .toArray(children) as ReactElement[];

    const onArrowClick = (direction: 'left' | 'right') => () => {
        wrapperRef.current?.scrollBy({
            left: direction === 'left' ? -150 : 150,
            behavior: 'smooth',
        });
    };

    const isShowArrows = ['l', 'xl', 'xxl'].includes(size);

    return (
        <div className={styles.wrapper}>
            {isShowArrows && (
                <button
                    onClick={onArrowClick('left')}
                    type="button"
                    className={cn(styles.round, styles['left-button'])}
                >
                    <ScrollArrowIcon className={cn(styles.arrow, styles['left-arrow'])} />
                </button>
            )}
            <div
                ref={wrapperRef}
                className={cn(
                    styles.scroll,
                )}
                style={{ gap }}
            >
                {childrenArray.map((card) => cloneElement(
                    card,
                ))}
                {isShowArrows && (
                    <button
                        onClick={onArrowClick('right')}
                        type="button"
                        className={cn(styles.round, styles['right-button'])}
                    >
                        <ScrollArrowIcon />
                    </button>
                )}
            </div>
        </div>
    );
};
