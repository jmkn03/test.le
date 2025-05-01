import React, {Component, useState} from 'react';
import GuessCard from "./GuessCard.jsx";
function PastGuesses({guessList,randomEntry,playing,setPlaying}) {

        return (
            <div>
                {guessList.length > 0 ? (
                    <div className="border-4 border-stone-700 bg-transparent m-8 rounded-2xl min-w-fit max-w-lg mx-auto text-center">
                        <div
                            className= "font-bold text-2xl text-stone-700 mx-auto p-1 align-middle">
                            GUESSES:
                        </div>
                        {guessList.map((guess,index) => (
                                <div
                                    key = {guess.id}
                                    className="border-t-4 border-stone-700 bg-transparent m-1 min-w-fit max-w-lg mx-auto text-center">
                                    <div className= "font-bold text-stone-700">
                                        GUESS {index+1}:
                                        <GuessCard guess={guess}/>
                                    </div>

                                </div>
                            )
                        )}
                    </div>
                    ) : (
                        <></>
                    )
                }

                {playing ? (
                    randomEntry ? (
                        guessList.length > 0 ? (
                            guessList[guessList.length-1].id !== randomEntry.id ? (
                                        <></>
                                    ) : (
                                        <div className="font-bold text-6xl text-stone-200 border-4 border-green-700 bg-green-500 m-8 rounded-2xl min-w-fit max-w-lg mx-auto text-center">
                                            YOU WON
                                        </div>
                                    )
                            ) : (
                                <div className="border-4 border-stone-700 bg-transparent m-8 rounded-2xl min-w-fit max-w-lg mx-auto text-center">
                                    NO GUESSES HAVE BEEN MADE
                                </div>
                            )) : (
                                <></>
                            )) : (
                                <div>
                                    YOU HAVE COMPLETED TODAY'S CHALLENGE
                                </div>
                            )
                }
            </div>
        );
}

export default PastGuesses;