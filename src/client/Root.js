import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

import 'semantic-ui-css/semantic.min.css';

const Root = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
};

export default Root;