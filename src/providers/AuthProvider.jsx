import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const initialAuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return initialAuthState;
    default:
      return state;
  }
};

export const AuthProvider = ({ children, clientId, clientSecret, redirectUri, authUrl }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const [loading, setLoading] = useState(true);

  // Efecto para manejar el intercambio de código por el token
  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.post(`${authUrl}/oauth/token`, {
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            code: code,
          });

          const token = response.data.access_token;
          localStorage.setItem('token', token);
          const userResponse = await axios.get(`${authUrl}/api/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          dispatch({ type: 'LOGIN', payload: { token, user: userResponse.data } });
          window.history.replaceState({}, document.title, window.location.pathname); // Limpiar URL
          } catch (error) {
          console.error('Error fetching token:', error.response?.data || error.message);
        }
      }
      setLoading(false);
    };

    fetchToken();
  }, [clientId, clientSecret, redirectUri, authUrl]);

  const login = () => {
    const authorizationUrl = `${authUrl}/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope`;

    window.location.href = authorizationUrl; // Redirigir a la página de autorización
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  const contextValue = useMemo(() => ({
    ...state,
    login,
    logout,
  }), [state]);

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
