import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { App } from './app';

const rootElement = document.getElementById('body');

if (!rootElement) {
    throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <HashRouter>
        <App />
    </HashRouter>,
);
