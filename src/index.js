import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LocaleProvider from 'antd/lib/locale-provider';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
import App from './app';

ReactDOM.render(
<BrowserRouter>
  <LocaleProvider locale={ru_RU}>
    <App />
  </LocaleProvider>
</BrowserRouter>, document.getElementById('root'));