/* eslint-disable max-len */

import {
    Scroll,
    Map,
    Cards,
    Specialties,
    Partners,
    Links,
    Promo,
    Vacancies,
    Feedback,
} from 'widgets';
import { Container } from 'shared/ui';

const HomePage = () => (
    <Container>
        <Promo
            image="https://almamater13.ru/800/600/http/okobzor.ru/wp-content/uploads/2021/06/54.jpg"
            title="Корреспондент"
            description="
              Корреспондент – это специалист, который занимается подготовкой
              информационных материалов для средств массовой информации
              (преимущественно телевизионных).
            "
        />
        <Scroll marginTop={100} marginBottom={100} />
        <Map
            marginTop={100}
            marginBottom={100}
            pointers={[
                {
                    title: 'Младший корреспондент',
                    description: 'Мониторинг информационных ресурсов, '
                      + 'блогосферы, поиск актуальных тем для репортажей и статей',
                    minSalary: 30000,
                    maxSalary: 50000,
                },
                {
                    title: 'Корреспондент',
                    description: 'Освещение профильных мероприятий, передача свежей, достоверной информации широкой аудитории',
                    minSalary: 50000,
                    maxSalary: 90000,
                },
                {
                    title: 'Тележурналист',
                    description: 'Выезд на место и сбор информации, установление контактов с авторитетными источниками, взаимодействие со съемочной группой, подача материала в рамках телевизионного формата',
                    minSalary: 100000,
                    maxSalary: 120000,
                },
                {
                    title: 'Выпускающий редактор',
                    description: 'Разработка концепции каждого выпуска газеты или журнала, составление макета, постановка задач корреспондентам, проверка готовых материалов, внесение корректировок, координация верстки.',
                    minSalary: 150000,
                },
            ]}
        />
        <Cards marginTop={100} marginBottom={100} />
        <Specialties marginTop={100} marginBottom={100} />
        <Vacancies />
        <Partners marginTop={100} marginBottom={100} />
        <Links marginTop={100} marginBottom={100} />
        <Feedback />
    </Container>
);

export default HomePage;
