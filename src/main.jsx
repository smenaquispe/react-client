import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { AuthProvider } from './providers/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter
import './index.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        scope: "openid profile email"
      }}
    >
    <AuthProvider
        clientId={import.meta.env.VITE_SIMPLE_AUTH_CLIENT_ID}
        clientSecret={import.meta.env.VITE_SIMPLE_AUTH_CLIENT_SECRET}
        redirectUri={window.location.origin}
        authUrl={import.meta.env.VITE_SIMPLE_AUTH_URL}
    >
      <App />
    </AuthProvider>
  </Auth0Provider>,

  </BrowserRouter>
);
