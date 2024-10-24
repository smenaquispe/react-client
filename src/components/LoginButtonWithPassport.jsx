

const API_URL = 'http://localhost:6001';



export const LoginButtonWithPassport = () => {

    const redirectToLogin = () => {
        const clientId = '9d50dc8c-3ba4-43fd-ac3e-0a2145fca0f0'; // Reemplaza con tu client_id
        const redirectUri = encodeURIComponent('http://localhost:3000'); // URL de redireccionamiento
        const responseType = 'code'; // o 'code' si usas un flujo de autorización más completo
    
        window.location.href = `http://localhost:6001/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope`
    };


    return (
    <button onClick={() => redirectToLogin()}>Log In</button>
  );
};