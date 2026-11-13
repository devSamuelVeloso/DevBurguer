import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles.js';
import { router } from './routes/index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
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
