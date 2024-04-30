import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { ProfessionParams } from 'shared/types';

import styles from './vacancies.module.scss';

export const Vacancies = () => {
    const widget = useRef<HTMLDivElement | null>(null);
    const { professionTitle } = useParams<ProfessionParams>();

    useEffect(() => {
        const script = document.createElement('script');

        script.src = `https://api.hh.ru/widgets/vacancies/search?count=6
        &locale=RU&links_color=596daf&border_color=ffffff
        &text=${encodeURI(professionTitle!)}&area=1`;

        script.className = 'hh-script';
        script.async = true;

        widget.current?.appendChild(script);

        return () => {
            widget.current?.removeChild(script);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div ref={widget} className={styles.widget} />
            <div className={styles.image}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/vacancies.svg`}
                    alt="vacancies"
                />
            </div>
        </div>
    );
};
