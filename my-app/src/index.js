import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StatsigProvider } from 'statsig-react';

// StatsigProvider.initialize('client-8kqLLcwCaNeT3dS5HlKWFFKXVxOKQ6OUpvOPJGuFm9g');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StatsigProvider sdkKey='client-8kqLLcwCaNeT3dS5HlKWFFKXVxOKQ6OUpvOPJGuFm9g'> */}
      <App />
    {/* </StatsigProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
