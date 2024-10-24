import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para manejar el login
  const login = async (code) => {
    try {
      const response = await axios.post('http://localhost:6001/oauth/token', {
        grant_type: 'authorization_code',
        client_id: '9d50dc8c-3ba4-43fd-ac3e-0a2145fca0f0', // Reemplaza con tu client_id
        client_secret: 'S6T5UQUNqwfMX96PSffr7iWw6N9lXSbFKtMlAClG', // Reemplaza con tu client_secret
        redirect_uri: 'http://localhost:3000', // URL de redireccionamiento
        code: code,
      });

      const accessToken = response.data.access_token;
      localStorage.setItem('token', accessToken);
      setToken(accessToken);

      const decodedToken = jwtDecode(accessToken);
      console.log('Decoded Token:', decodedToken);

      await fetchUserData(accessToken); // Obtener datos del usuario
    } catch (error) {
      console.error('Error fetching token:', error.response?.data || error.message);
    }
  };

  // Función para obtener datos del usuario
  const fetchUserData = async (accessToken) => {
    try {
      const response = await axios.get('http://localhost:6001/api/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userData = response.data;
      console.log('User Data:', userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Función para el logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // Verificar si el usuario está autenticado
  const isAuthenticated = !!token;

  // Cargar token y datos de usuario al inicio
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchUserData(storedToken);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
