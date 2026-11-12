import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/index.jsx';
import GlobalStyles from './styles/globalStyles.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      theme="dark"
      pauseOnHover={false}
      transition={Zoom} />
  </StrictMode>,
);
