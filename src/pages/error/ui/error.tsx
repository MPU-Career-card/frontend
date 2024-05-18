import React, { memo } from 'react';

import { Container, Error as ErrorComponent } from 'shared/ui';

import styles from './error.module.scss';
import { ErrorProps } from './types';

export const Error = memo<ErrorProps>(({
    status,
    description,
}) => (
    <Container className={styles.wrapper}>
        <ErrorComponent
            status={status}
            description={description}
        />
    </Container>
));
