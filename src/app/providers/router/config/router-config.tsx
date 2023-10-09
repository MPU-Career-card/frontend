import { RouteProps } from 'react-router-dom';

import { HomePage } from 'pages';
import { Routes } from 'shared/config';

export const routerConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: Routes.MAIN,
        element: <HomePage />,
    },
};
