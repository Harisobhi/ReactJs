import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './index.css';
import Main from './Index.jsx';
import App1 from './App1.jsx';
import Example from './Example.jsx';
import Connect from './Connect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <Header />
    <Sample />
    <Footer /> */}

    <Main />
    <App1 />
    <Example />
    <App1 />
    <Connect />

  </StrictMode>
);

export default App;
