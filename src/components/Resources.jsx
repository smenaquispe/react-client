import { useEffect, useState } from "react";

const RESOURCE_SERVER_URL = import.meta.env.VITE_RESOURCE_SERVER_URL;

const Resources = (token) => {
    const [resources, setResources] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            setIsLoading(false);
            return;   
        }

        fetch(`${RESOURCE_SERVER_URL}/api/protected`, {
            method: "GET",
            headers: {
                 "Authorization": `Bearer ${token['token']}`,
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error('Failed to fetch resources');
            }
            return response.json();
        })
        .then(data => {
            setResources(data);
            setIsLoading(false);
        })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        });
    }, [token]);
    
    if(isLoading) {
        return <p>Loading resources...</p>   
    }

    return (
        <>
            {error && <p>{error.message}</p>}

            {resources &&
            <>
                <h2>Resources</h2>
                {resources['message']}
            </>
            }
        </>
    );
};

export default Resources;