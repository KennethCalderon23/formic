import { useEffect, useState } from "react";

function Api() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setPersonajes(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="characters-page">
            <h1>Personajes serie</h1>
            <div className="characters-container api-grid">
                {personajes.map(personaje => (
                    <div className="character" key={personaje.id}>
                        <img src={personaje.image} alt={personaje.name} />
                        <p>{personaje.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Api };
