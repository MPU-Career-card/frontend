import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';

const rootElemet = document.getElementById('root');

if (!rootElemet) {
    throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElemet);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
