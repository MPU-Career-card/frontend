import {
    ChangeEvent,
    useEffect,
    useRef,
    useState,
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
    const [showError, setShowError] = useState(false);

    const isSearching = useRef<boolean>(false);

    const resetError = () => {
        setErrorStatus(undefined);
        setErrorText(undefined);
        setShowError(false);
    };

    const getFaculties = async () => {
        try {
            resetError(); // Сброс ошибок перед загрузкой
            setIsLoading(true);

            const { data: faculties } = await facultiesApi.get<string[]>('');
            const specialities = faculties.reduce((acc, faculty) => ({
                ...acc,
                [faculty]: [],
            }), {});

            setSpecialities(specialities);
        } catch (err) {
            if (err instanceof AxiosError) {
                const status = err.response?.status || 500; // Если status отсутствует, установить 500
                const detail = err.response?.data?.detail || 'Произошла ошибка'; // Если detail отсутствует, установить дефолтное сообщение

                setErrorStatus(status);
                setErrorText(detail || 'Ошибка загрузки факультетов');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const getSpecialities = async (faculty: string) => {
        if (isSearching.current) return;

        try {
            resetError(); // Сброс ошибок перед загрузкой

            const { data } = await getFaculty(faculty);

            setSpecialities((specialities) => ({
                ...specialities,
                [faculty]: data.specialities,
            }));
        } catch (err) {
            if (err instanceof AxiosError) {
                const status = err.response?.status || 500;
                const detail = err.response?.data?.detail || 'Произошла ошибка';

                setErrorStatus(status);
                setErrorText(detail || 'Ошибка загрузки специальностей');
            }
        }
    };

    const search = async (search: string) => {
        if (!search) {
            isSearching.current = false;
            await getFaculties(); // Загрузка всех факультетов при пустом поиске
            return;
        }

        try {
            resetError(); // Сброс ошибок перед поиском
            isSearching.current = true;

            const { data } = await searchSpecialities(search);
            const specialities: Specialities = Object.keys(data).reduce((acc, faculty) => ({
                ...acc,
                [faculty]: data[faculty].specialities,
            }), {});

            setSpecialities(specialities);
        } catch (err) {
            if (err instanceof AxiosError) {
                const status = err.response?.status || 500;
                const detail = err.response?.data?.detail || 'Произошла ошибка';

                setErrorStatus(status);
                setErrorText(detail || 'Ошибка поиска специальностей');
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

    useEffect(() => {
        if (errorStatus || errorText) {
            const timeout = setTimeout(() => setShowError(true), 1000);
            return () => clearTimeout(timeout);
        }
        setShowError(false);
        return undefined;
    }, [errorStatus, errorText]);
    // Показываем ошибку только если она подтверждена и данные пустые
    const shouldShowError = showError && Object.keys(specialities).length === 0;

    if (isLoading) {
        return <Loading />;
    }

    if (shouldShowError) {
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
