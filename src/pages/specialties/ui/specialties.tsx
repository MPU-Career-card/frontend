import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import {
    Footer,
    SpecialitiesPromo,
    FacultiesAccordions,
} from 'widgets';
import { Container } from 'shared/ui';
import { facultiesApi } from 'shared/lib';

import { Loading } from '../../loading';
import { Error } from '../../error';

const SpecialtiesPage = () => {
    const [faculties, setFaculties] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorStatus, setErrorStatus] = useState<number>();
    const [errorText, setErrorText] = useState<string>();

    const getFaculties = async () => {
        try {
            setIsLoading(true);

            const { data } = await facultiesApi.get<string[]>('');

            setFaculties(data);
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
        getFaculties();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (errorStatus || errorText) {
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
                будущей профессией и выбрать нужное направление подготовки в Московском Политехе"
            />
            <FacultiesAccordions
                faculties={faculties}
                marginTop={100}
                marginBottom={100}
            />
            <Footer />
        </Container>
    );
};

export default SpecialtiesPage;
