import {
    ChangeEvent, useEffect, useRef, useState,
} from 'react';
import { AxiosError } from 'axios';

import {
    Footer,
    SpecialitiesPromo,
    FacultiesAccordions,
} from 'widgets';
import { Container } from 'shared/ui';
import {
    debounce,
    facultiesApi,
    getFaculty,
    searchSpecialities,
} from 'shared/lib';
import { Specialities } from 'shared/types';

import { Loading } from '../../loading';
import { Error } from '../../error';

const SpecialtiesPage = () => {
    const [specialities, setSpecialities] = useState<Specialities>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorStatus, setErrorStatus] = useState<number | undefined>(undefined);
    const [errorText, setErrorText] = useState<string | undefined>(undefined);

    const isSearching = useRef<boolean>(false);

    const getFaculties = async () => {
        try {
            setIsLoading(true);

            const { data: faculties } = await facultiesApi.get<string[]>('');
            const specialities = faculties.reduce((acc, faculty) => ({
                ...acc,
                [faculty]: [],
            }), {});

            setSpecialities(specialities);
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

    const getSpecialities = async (faculty: string) => {
        if (isSearching.current) return;

        try {
            const { data } = await getFaculty(faculty);

            setSpecialities((specialities) => ({
                ...specialities,
                [faculty]: data.specialities,
            }));
        } catch (err) {
            if (err instanceof AxiosError) {
                const { status, data: { detail } } = err.response || { data: {} };

                setErrorStatus(status);
                setErrorText(detail);
            }
        }
    };

    const search = async (search: string) => {
        if (!search) {
            isSearching.current = false;
            getFaculties();

            return;
        }

        try {
            isSearching.current = true;

            const { data } = await searchSpecialities(search);
            const specialities: Specialities = Object.keys(data).reduce((acc, faculty) => ({
                ...acc,
                [faculty]: data[faculty].specialities,
            }), {});

            console.log({ specialities });

            setSpecialities(specialities);
        } catch (err) {
            if (err instanceof AxiosError) {
                const { status, data: { detail } } = err.response || { data: {} };

                setErrorStatus(status);
                setErrorText(detail);
            }
        }
    };

    const debouncedSearch = debounce(search, 300);

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value);
    };

    useEffect(() => {
        getFaculties();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (errorStatus !== undefined || errorText !== undefined) { // Проверяем наличие ошибки
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
                description="Проект, который поможет тебе определиться с
                будущей профессией и выбрать нужное направление подготовки в Московском Политехе"
            />
            <FacultiesAccordions
                specialities={specialities}
                getSpecialities={getSpecialities}
                onSearchInputChange={onSearchInputChange}
                marginTop={100}
                marginBottom={100}
            />
            <Footer />
        </Container>
    );
};

export default SpecialtiesPage;
