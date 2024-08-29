import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
// import './index.css';
// import Main from './Index.jsx';
// import App1 from './App1.jsx';
// import Example from './Example.jsx';
// import Student from './Student.jsx';
import Student1 from './App1.jsx';
import Data from './Data.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
 },
 {
  path: "/About",
  element: <About />,
},
{
  path: "/Contact",
  element: <Contact />,
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <Header />
    <Sample />
    <Footer /> */}
{/* <About /> */}
    {/* <Main /> */}
    {/* <App1 /> */}
    {/* <Example /> */}
    {/* <App1 /> */}
    {/* <Student1 />
<Data /> */}
<RouterProvider router={router} />
  </StrictMode>
);

