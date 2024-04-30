import { RouteProps } from 'react-router-dom';

import { Error, HomePage, SpecialtiesPage } from 'pages';
import { Routes } from 'shared/config';

export const routerConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: `${Routes.MAIN}:professionTitle`,
        element: <HomePage />,
    },
    [Routes.SPECIALITY]: {
        path: Routes.SPECIALITY,
        element: <SpecialtiesPage />,
    },
    [Routes.OTHER]: {
        path: Routes.OTHER,
        element: <Error
            status="Такой странице нет"
            description="В URL должно быть название профессии/специальности"
        />,
    },
};
