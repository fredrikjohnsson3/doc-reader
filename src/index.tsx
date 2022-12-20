import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import SubmitFormItem from './components/submit-form-item';
import store from './state/store';

const App = () => {
    return (
        <Provider store={store}>
            <SubmitFormItem />
        </Provider>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode>{<App />}</React.StrictMode>);
