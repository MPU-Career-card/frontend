import { FC } from 'react';

import {
    Text,
    ProCard,
    PartnerCard,
} from 'shared/ui';

import { PartnersProps } from './types';

import styles from './partners.module.scss';

export const Partners: FC<PartnersProps> = ({
    marginTop,
    marginBottom,
    partners,
    faculty,
}) => {
    let facultyHeader = '';
    let facultyBody = '';

    switch (faculty) {
    case 'Факультет Информационных Технологий':
    case 'Транспортный факультет':
    case 'Факультет машиностроения':
        facultyHeader = 'Больше стажировок!';
        // eslint-disable-next-line max-len
        facultyBody = 'Актуальную информацию о партнерах и открытых стажировках можете узнать, написав в «Центр карьеры и трудоустройства»';
        break;

    case 'Полиграфический институт':
    case 'Институт графики и искусства книги':
    case 'Институт издательского дела и журналистики':
        facultyHeader = 'Партнеров так много, что все не поместились...';
        facultyBody = 'Узнать о них подробнее можете , написав в «Центр карьеры и трудоустройства»';
        break;

    case 'Факультет урбанистики и городского хозяйства':
    case 'Факультет химической технологии и биотехнологии':
    case 'Факультет экономики и управления':
        facultyHeader = 'Больше партнеров — больше возможностей!';
        facultyBody = 'Узнайте подробности вашей будущей стажировки по адресу:';
        break;

    default:
        facultyHeader = 'Подробнее о партнерах Московского Политеха';
        // eslint-disable-next-line max-len
        facultyBody = 'Узнать о возможности прохождения практики и стажировки.';
    }
    return (
        <div style={{ marginTop, marginBottom }}>
            <Text size="xl2" className={styles.title}>
                Партнеры
            </Text>
            <div className={styles.grid}>
                <div className={styles.cards}>
                    {partners.map(({ to, image, name }) => (
                        <PartnerCard
                            to={to}
                            name={name}
                            image={image}
                        />
                    ))}
                </div>
                <div className="short-card">
                    <ProCard
                        to="mailto:partner@mospolytech.ru"
                        color="blue"
                        header={facultyHeader}
                        body={facultyBody}
                        footer="partner@mospolytech.ru"
                        isMobileProps
                    />
                </div>
            </div>
        </div>
    );
};
