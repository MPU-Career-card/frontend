import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { Spinner } from 'shared/ui';

import { routerConfig } from '../config/router-config';

export const Router = () => (
    <Suspense fallback={<Spinner />}>
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
