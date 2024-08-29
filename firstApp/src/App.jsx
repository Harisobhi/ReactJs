import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Sample from './Sample.jsx';
// import Footer from './Footer.jsx';
// import Header from './Header.jsx';
import Main from './Index.jsx';
import './index.css';
import App1 from './App1.jsx';
import Example from './Example.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header />
    <Sample />
    <Footer /> */}
    <Main />
    <App1 />
    <Example />
    
  </StrictMode>,
)
