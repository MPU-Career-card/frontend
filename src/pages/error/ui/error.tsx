import React, { memo } from 'react';

import { Container, Text } from 'shared/ui';

import styles from './error.module.scss';
import { ErrorProps } from './types';

export const Error = memo<ErrorProps>(({
    status,
    description,
}) => (
    <Container className={styles.wrapper}>
        <Text tag="h1" size="xl3" color="purple">{status || 'Ошибка'}</Text>
        <Text tag="h2" size="xl2">
            {description || 'Повторите попытку позже'}
        </Text>
    </Container>
));
