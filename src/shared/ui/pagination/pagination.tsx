import { FC } from 'react';

import { cn } from 'shared/lib';
import { Flex, Text, Button } from 'shared/ui';
import { LeftArrowIcon, RightArrowIcon } from 'shared/icons';

import { PaginationProps } from './types';

import styles from './pagination.module.scss';

export const Pagination: FC<PaginationProps> = ({ pages }) => (
    <div className={cn(styles.pagination)}>
        <Flex justify="space-between">
            <Button rounded size="m">
                <LeftArrowIcon />
            </Button>
            <div
                style={{
                    background: 'white',
                    padding: '4px 16px',
                    borderRadius: '100rem',
                }}
            >
                <Flex gap={2}>
                    {Array.from(Array(pages), (_, i) => (
                        <Button rounded size="s" key={i}>
                            <Text size="xs" color="grey">
                                {i.toString()}
                            </Text>
                        </Button>
                    ))}
                </Flex>
            </div>
            <Button rounded size="m">
                <RightArrowIcon />
            </Button>
        </Flex>
    </div>
);
