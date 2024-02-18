import {
    Button, Flex, Input, Text,
} from 'shared/ui';
import { Logo } from 'shared/icons';

import styles from './feedback.module.scss';

export const Feedback = () => (
    <div className={styles.wrapper}>
        <div className={styles.widget}>
            <Flex align="start" direction="vertical" gap={32}>
                <Text color="white" size="xl2">Остались вопросы?</Text>
                <Text color="white">
                    Напишите ваш вопрос на почту Московского
                    Политеха и мы свяжемся с вами в кратчайшие сроки!
                </Text>
            </Flex>
            <form className={styles.form}>
                <Input variant="outlined" placeholder="ФИО" />
                <Input variant="outlined" type="email" placeholder="Эл. почта" />
                <Input variant="outlined" placeholder="Ваш вопрос" />
                <Button type="submit" size="l" color="white">
                    <Text color="blue" size="m" weight="semi">
                        Отправить
                    </Text>
                </Button>
            </form>
        </div>
        <div className={styles.image}>
            <img
                src={`${process.env.PUBLIC_URL}/assets/email.png`}
                alt="email"
            />
            <Logo />
        </div>
    </div>
);
