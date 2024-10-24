import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Resources from "../Resources";
import BaseButton from "./BaseButton";

const ButtonAccessToResources = () => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [token, setToken] = useState(null);

    const handleClick = async () => {
        setToken(null);
        const token_response = await getAccessTokenSilently({
            authorizationParams: {
                audience: import.meta.env.VITE_AUTH0_AUDIENCE
            }
        })
        setToken(token_response);
    };

    return (
        <>
            <BaseButton
                onClick={handleClick}
            >Access to Resources</BaseButton>
            {token && 
                <>
                    <p>Token is valid</p> 
                    <Resources token={token} />
                </>
            }

            {
                (!token && isAuthenticated) &&
                <>
                    <p>Token is not valid</p>
                </>
            }

            {
                (!token && !isAuthenticated) &&
                <>
                    <p>You are not authenticated</p>
                </>
            }
        </>
    );
};

export default ButtonAccessToResources;