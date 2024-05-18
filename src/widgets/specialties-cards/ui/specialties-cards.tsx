import React, { FC, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { ProCard, Spinner, Error } from 'shared/ui';
import { getFaculty } from 'shared/lib';
import { Profession } from 'shared/types';

import { SpecialtiesCardsProps } from './types';

import styles from './specialties-cards.module.scss';

export const SpecialtiesCards: FC<SpecialtiesCardsProps> = ({
    faculty,
    marginTop,
    marginBottom,
}) => {
    const [specialities, setSpecilities] = useState<Profession[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorStatus, setErrorStatus] = useState<number>();
    const [errorText, setErrorText] = useState<string>();

    const getSpecialities = async () => {
        try {
            setIsLoading(true);

            const { data } = await getFaculty(faculty);

            setSpecilities(data.professions);
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
        return <Spinner />;
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
        <div
            className={styles.cards}
            style={{ marginTop, marginBottom }}
        >
            {specialities.map(({
                id,
                title,
                description,
            }) => (
                <ProCard
                    key={id}
                    to={`/${title}`}
                    color="white"
                    header={title}
                    body={description}
                />
            ))}
        </div>
    );
};
