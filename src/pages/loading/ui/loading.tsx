import React from 'react';

import { Container, Spinner } from 'shared/ui';

import styles from './loading.module.scss';

export const Loading = () => (
    <Container className={styles.wrapper}>
        <Spinner />
    </Container>
);
