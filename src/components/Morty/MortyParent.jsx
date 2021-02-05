import React, { useEffect, useState } from 'react';
import { CardColumns } from 'reactstrap';
import MortyChild from './MortyChild'

const MortyParent = () => {
    const [characters, setCharacters] = useState([]);
    function fetchMorty() {
        const url = "https://rickandmortyapi.com/api/character";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setCharacters(json.results);
                console.log(json.results);
            });
    }

    useEffect(() => {
        fetchMorty();
    }, []);
    // to do something on a pageload, tell the page to do it only when the page loads (i.e. "[]")

    function displayCards() {
        return characters.length > 0 ? characters.map((character) => <MortyChild mortyCharacter={character} />) : null
    }
    return (<div>
        <button onClick={fetchMorty}>Fetch Morty</button>

        <CardColumns>
            {displayCards()}
        </CardColumns>

    </div>
    )
};

export default MortyParent;