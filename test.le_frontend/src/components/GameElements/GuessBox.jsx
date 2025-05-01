import React, {Component, useEffect, useState} from 'react';
import {TfiSearch, TfiAngleDown, TfiAngleUp, TfiTrash} from "react-icons/tfi";
import TitleCard from "./TitleCard.jsx";
import SearchResults from "./SearchResults.jsx";
import FetchData from "./FetchData.jsx";
import PastGuesses from "./PastGuesses.jsx";
import error from "eslint-plugin-react/lib/util/error.js";

function GuessBox() {

    const [guess, setGuess] = useState("");
    const [writing,setWriting] = useState(false);

    const [guessList, setGuessList] = useState(() => {
        // Initialize state from localStorage
        const storedGuesses = localStorage.getItem("siteChanges");
        return storedGuesses ? JSON.parse(storedGuesses) : [];
    }); // loading guesses made before

    const [matchesEntry,setMatchesEntry] = useState(false);
    const [filteredData,setFilteredData] = useState([]);
    const [alreadyGuessed,setAlreadyGuessed] = useState(false);
    const [randomEntry,setRandomEntry] = useState(null);
    const [playing,setPlaying] = useState(true);


    useEffect(() => {
        localStorage.setItem("siteChanges", JSON.stringify(guessList));
    }, [guessList]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setGuessList([]); // Clear state
            localStorage.removeItem("siteChanges"); // Clear localStorage
        }, 10000) // FIX: reset when random entry changes
    },[guessList]);

            function HandleGuessChange(event) {
            setGuess(event.target.value);
        }
        function inputBarFocus(){
            setWriting(true);
        }
        function inputBarBlur(){
            setTimeout(() => {
                setWriting(false);
            }, 70); // Timeout to give the results enough screen time to be clicked (selected)
        }

        function handleGuess(){
            if (matchesEntry) {
                if(!guessList.find(item => item.id === filteredData[0].id)){
                    setGuessList(g => [...g, filteredData[0]]);
                    setGuess('');
                }
                else {
                    setAlreadyGuessed(true);
                    console.log("Already tried this!!")
                }
                setMatchesEntry(false);
            }
        }

    return (
            <div>

                <br/>

                <div className="flex text-center rounded-2xl justify-center items-center w-fit mx-auto
                                bg-stone-700">
                    <input
                        className="outline-none m-3 rounded-2xl text-center flex justify-center items-center bg-stone-700
                                   text-stone-300 text-4xl placeholder-stone-300"
                        placeholder= "Search here.."
                        type = "string"
                        value = {guess}
                        onChange={HandleGuessChange}
                        onFocus={inputBarFocus}
                        onBlur={inputBarBlur}
                    />
                    <button
                        className="mx-3 text-3xl text-stone-300 hover:text-stone-400 p-3"
                        onClick = {handleGuess}>
                        Guess
                    </button>
                </div>
                <br/>
                <FetchData guess = {guess} writing={writing} setGuess={setGuess} setMatchesEntry={setMatchesEntry} filteredData = {filteredData} setFilteredData = {setFilteredData} setRandomEntry={setRandomEntry} randomEntry={randomEntry}/>
                <PastGuesses guessList={guessList} randomEntry={randomEntry} playing={playing} setPlaying={setPlaying}/>
            </div>
        );
}

export default GuessBox;