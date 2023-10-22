import { Link } from 'react-router-dom';

import {
    Container, Flex, Text, Input,
} from 'shared/ui';
import { Routes } from 'shared/config';
import { Logo } from 'shared/icons';

import styles from './header.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <Container>
            <Flex justify="space-between">
                <Link to={Routes.MAIN}>
                    <Flex gap={8}>
                        <Logo />
                        <Text
                            color="white"
                            weight="bold"
                            size="m"
                            view="secondary"
                            caps
                        >
                            Карьерные карты
                        </Text>
                    </Flex>
                </Link>
                <Flex justify="space-between" gap={32}>
                    <Input align="center" type="number" />
                    <Text
                        color="white"
                        view="secondary"
                        size="s"
                        to={Routes.MAIN}
                        caps
                    >
                        Главная
                    </Text>
                    <Text
                        color="white"
                        view="secondary"
                        size="s"
                        to={Routes.MAIN}
                        caps
                    >
                        Профессии
                    </Text>
                    <Text
                        color="white"
                        view="secondary"
                        size="s"
                        to={Routes.MAIN}
                        caps
                    >
                        Специальности
                    </Text>
                </Flex>
            </Flex>
        </Container>
    </header>
);
