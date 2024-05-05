import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import {
    SpecialtiesAccordions,
    Footer,
    SpecialitiesPromo,
} from 'widgets';
import { Container } from 'shared/ui';
import { Speciality } from 'shared/types';
import { specialitiesApi } from 'shared/lib';

import { Loading } from '../../loading';
import { Error } from '../../error';

const SpecialtiesPage = () => {
    const [specialities, setSpecialities] = useState<Speciality[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorStatus, setErrorStatus] = useState<number>();
    const [errorText, setErrorText] = useState<string>();

    const getSpecialities = async () => {
        try {
            setIsLoading(true);

            const { data } = await specialitiesApi.get<Speciality[]>('');

            setSpecialities(data);
        } catch (err) {
            if (err instanceof AxiosError) {
                const { status, data: { detail } } = err.response || { data: {} };

                setErrorStatus(status);
                setErrorText(detail);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getSpecialities();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (!specialities) {
        return (
            <Error
                status={errorStatus}
                description={errorText}
            />
        );
    }
    return (
        <Container>
            <SpecialitiesPromo
                image={`${process.env.PUBLIC_URL}/assets/promo.jpg`}
                title="Карьерные карты"
                description="- это проект, который поможет тебе определиться с
                будущей профессией и выбрать нужное направление подготовки в нашем
                университете"
            />
            <SpecialtiesAccordions
                specialities={specialities}
                marginTop={100}
                marginBottom={100}
            />
            {/* <Links links={[]} marginTop={100} marginBottom={64} /> */}
            <Footer />
        </Container>
    );
};

export default SpecialtiesPage;
