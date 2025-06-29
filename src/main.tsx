import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.tsx';
import { HelmetProvider } from 'react-helmet-async';



if (import.meta.env.NODE_ENV === "production") {
  disableReactDevTools();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AuthProvider>
     <HelmetProvider>
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <Routes>
      <Route path={"/*"} element={<App />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)


