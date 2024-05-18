import React, { memo } from 'react';

import { Text } from '../text';
import { ErrorProps } from './types';

export const Error = memo<ErrorProps>(({
    status,
    description,
}) => (
    <>
        <Text tag="h1" size="xl3" color="purple">{status || 'Ошибка'}</Text>
        <Text tag="h2" size="xl2">
            {description || 'Повторите попытку позже'}
        </Text>
    </>
));
