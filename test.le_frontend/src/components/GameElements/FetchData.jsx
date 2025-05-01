import React, {Component, useEffect, useState} from 'react';
import SearchResults from "./SearchResults.jsx";
import TitleCard from "./TitleCard.jsx";

function FetchData({guess,writing,setGuess,setMatchesEntry,filteredData,setFilteredData,randomEntry,setRandomEntry}) {

    const [clubData, setClubData] = useState([]);



    useEffect(() => {
        const fetchClubData = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/content');
                const data = await res.json();
                setClubData(data);
            } catch (error) {
                console.error('Error fetching club data:', error);
            }
        };
        fetchClubData();
    },[]);

    useEffect(() => {
        const fetchFilteredData = async () => {
            if(guess) {
                try {
                    const res = await fetch(`http://localhost:8080/api/content/title/${encodeURIComponent(guess)}`);
                    const data = await res.json();
                    setFilteredData(data);
                } catch (error) {
                    console.error('Error fetching club data:', error);
                }
            }
        };
        fetchFilteredData();
        if(guess.length === 0)
            setFilteredData([]);
        if(filteredData.length > 0 && guess === filteredData[0].title)
            setMatchesEntry(true);

    },[guess]);

    useEffect(() => {
        const fetchRandomClub = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/content/random');
                const data = await res.json();
                setRandomEntry(data);
            } catch (error) {
                console.error('Error fetching club data:', error);
            }
        };
        fetchRandomClub();
    },[]);

    function pickTitle(title){
        setGuess(title);
    }

        return (
            <div>
                <SearchResults writing = {writing} filteredData={filteredData} pickTitle={pickTitle}/>
            </div>
        );
}

export default FetchData;