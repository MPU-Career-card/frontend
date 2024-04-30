import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { Error } from 'pages';
import { routerConfig } from '../config/router-config';

export const Router = () => (
    <Suspense fallback={<Error />}>
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    </Suspense>
);
