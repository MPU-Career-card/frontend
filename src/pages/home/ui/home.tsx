import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';

import {
    Tasks,
    Map,
    Skills,
    Specialties,
    Partners,
    Links,
    Promo,
    Vacancies,
    Feedback,
    Footer,
} from 'widgets';
import { Container } from 'shared/ui';
import { Profession, ProfessionParams } from 'shared/types';
import { professionAdapter, professionsApi } from 'shared/lib';

import { Error } from '../../error';
import { Loading } from '../../loading';

const HomePage = () => {
    const [profession, setProfession] = useState<Profession | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Начальное состояние — загрузка
    const [errorStatus, setErrorStatus] = useState<number | undefined>(undefined);
    const [errorText, setErrorText] = useState<string | null>(null);
    const { professionTitle } = useParams<ProfessionParams>();

    const getProfession = async () => {
        try {
            setIsLoading(true);
            const { data } = await professionsApi.get<Profession>(`/${professionTitle}`);
            setProfession(data);
            setErrorStatus(undefined);
            setErrorText(null);
        } catch (err) {
            if (err instanceof AxiosError) {
                const { status, data: { detail } } = err.response || { data: {} };
                setErrorStatus(status);
                setErrorText(detail || 'Произошла ошибка при загрузке данных.');
            } else {
                setErrorStatus(500);
                setErrorText('Произошла ошибка при загрузке данных.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProfession();
    }, []);

    const imgLink = useMemo(() => {
        if (!profession?.image_link || profession.image_link === '-') {
            return 'https://www.gofraprime.ru/wp-content/uploads/2017/08/slide-3.jpg';
        }
        return profession.image_link;
    }, [profession]);

    if (isLoading) {
        return <Loading />;
    }

    if (errorStatus || errorText) {
        return (
            <Error
                status={errorStatus}
                description={errorText || 'Профессия не найдена.'}
            />
        );
    }

    if (!profession) {
        // Фallback — на случай, если profession неожиданно null, возвращаем пустую страницу
        return null;
    }

    return (
        <Container>
            <Promo
                image={imgLink}
                title={profession.title}
                description={profession.description}
            />
            <Tasks
                marginTop={100}
                marginBottom={100}
                tasks={professionAdapter.tasks(profession)}
            />
            <Map
                marginTop={100}
                marginBottom={100}
                pointers={professionAdapter.mapPointer(profession)}
            />
            <Skills
                skills={professionAdapter.skills(profession)}
                marginTop={100}
                marginBottom={100}
            />
            <Specialties
                bachelors={professionAdapter.bachelors(profession)}
                masters={professionAdapter.masters(profession)}
                dpo={professionAdapter.dpo(profession)}
                marginTop={100}
                marginBottom={100}
            />
            <Vacancies />
            <Partners
                partners={professionAdapter.partners(profession)}
                marginTop={100}
                marginBottom={100}
            />
            <Links
                links={professionAdapter.links(profession)}
                marginTop={100}
                marginBottom={100}
            />
            <Feedback />
            <Footer />
        </Container>
    );
};

export default HomePage;
