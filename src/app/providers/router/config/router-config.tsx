import { RouteProps } from 'react-router-dom';

import { HomePage, SpecialtiesPage } from 'pages';
import { Routes } from 'shared/config';

export const routerConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: Routes.MAIN,
        element: <HomePage />,
    },
    [Routes.SPECIALITY]: {
        path: Routes.SPECIALITY,
        element: <SpecialtiesPage />,
    },
};
