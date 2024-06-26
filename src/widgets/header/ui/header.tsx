import { Link } from 'react-router-dom';

import {
    Container, Flex, Text,
} from 'shared/ui';
import { Routes } from 'shared/config';
import { Logo } from 'shared/icons';

import styles from './header.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <Container>
            <Flex justify="space-between">
                <Link to={Routes.PROFESSION}>
                    <Flex gap={8}>
                        <Logo />
                        <Text
                            color="white"
                            weight="bold"
                            size="m"
                            caps
                        >
                            Карьерные карты
                        </Text>
                    </Flex>
                </Link>
                <Flex justify="space-between" gap={32}>
                    <Text
                        color="white"
                        size="s"
                        to={Routes.PROFESSION}
                        caps
                    >
                        Главная
                    </Text>
                    <Text
                        color="white"
                        size="s"
                        to={Routes.PROFESSION}
                        caps
                    >
                        Профессии
                    </Text>
                    <Text
                        color="white"
                        size="s"
                        to={Routes.SPECIALITY}
                        caps
                    >
                        Специальности
                    </Text>
                </Flex>
            </Flex>
        </Container>
    </header>
);
