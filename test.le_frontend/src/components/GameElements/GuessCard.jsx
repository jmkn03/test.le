import React, {Component} from 'react';

function GuessCard({guess}){
        return (
            <div>
                <div className="font-bold">
                    {guess.title}
                </div>
                <div className="font-normal">
                    {guess.desc}
                </div>
            </div>
        );
}

export default GuessCard;