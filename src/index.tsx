import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';

const rootElement = document.getElementById('body');

if (!rootElement) {
    throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter basename="/frontend">
            <App />
        </BrowserRouter>
    </StrictMode>,
);
