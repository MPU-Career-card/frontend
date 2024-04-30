import React from 'react';
import { Flex, Text } from 'shared/ui';

export const NotFound = () => (
    <Flex direction="vertical" gap={12}>
        <Text size="xl2">Нет программ</Text>
        <Text size="xl3">😔</Text>
    </Flex>
);
