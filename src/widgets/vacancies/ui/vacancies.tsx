import { useEffect, useRef } from 'react';

import styles from './vacancies.module.scss';

export const Vacancies = () => {
    const widget = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://api.hh.ru/widgets/vacancies/search'
          + '?count=6&locale=RU&links_color=596daf&border_color=ffffff'
          + '&text=react&area=1&experience=noExperience';
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
