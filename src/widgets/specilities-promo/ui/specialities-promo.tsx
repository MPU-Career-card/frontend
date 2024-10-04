import React, { CSSProperties, FC } from 'react';

import { Text } from 'shared/ui';
import { Logo } from 'shared/icons';
import { useWindowDimensions } from 'shared/lib';

import { PromoProps } from './types';

import styles from './specialities-promo.module.scss';

export const SpecialitiesPromo: FC<PromoProps> = ({ image, title, description }) => {
    const size = useWindowDimensions({ m: 940 });
    const style: CSSProperties = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div style={style} className={styles.promo}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <Text
                        size={['xs', 's', 'm'].includes(size) ? 'xl2' : 'xl3'}
                        weight="bold"
                        color="white"
                        view="montserrat"
                        zIndex={2}
                    >
                        {title}
                    </Text>
                </div>
                <div className={styles.description}>
                    <Text size="xs" view="montserrat">
                        {description}
                    </Text>
                </div>
            </div>
        </div>
    );
};
