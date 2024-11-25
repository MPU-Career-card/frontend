import {
    Button, Flex, Input, Text,
} from 'shared/ui';
import { Logo } from 'shared/icons';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './feedback.module.scss';

export const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Обработчик изменения полей
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Обработчик отправки формы
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Проверка данных
        if (!formData.name || !formData.email || !formData.message) {
            setError('Пожалуйста, заполните все поля.');
            return;
        }

        // Настройки для EmailJS
        const serviceID = 'service_gfv3msw';
        const templateID = 'template_nxaeajn';
        const userID = 'i_vaF6jJ835T8EyWA';

        // Отправка через EmailJS
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitted(true);
                setError(null); // Очищаем ошибку, если была
            }, (err) => {
                console.error('FAILED...', err);
                setError('Произошла ошибка при отправке сообщения.');
            });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.widget}>
                <Flex align="start" direction="vertical" gap={32}>
                    <Text color="white" size="xl2">Остались вопросы?</Text>
                    <Text color="white">
                        Напишите ваш вопрос на почту Московского
                        Политеха и мы свяжемся с вами в кратчайшие сроки!
                    </Text>
                </Flex>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        variant="outlined"
                        name="name"
                        placeholder="ФИО"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <Input
                        variant="outlined"
                        type="email"
                        name="email"
                        placeholder="Эл. почта"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        variant="outlined"
                        name="message"
                        placeholder="Ваш вопрос"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {error && <Text color="red">{error}</Text>}
                    {isSubmitted && <Text color="green">Сообщение успешно отправлено!</Text>}
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
            </div>
        </div>
    );
};
