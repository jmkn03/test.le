import React, {Component} from 'react';
import TitleCard from "./TitleCard.jsx";

function SearchResults({writing,filteredData,pickTitle}) {
        return (
            <div>
                {writing ? (
                    <div  className="text-center rounded-2xl justify-center items-center mx-auto
                                     bg-stone-200 w-fit">
                        {filteredData.map((club) => (
                            <div
                                key={club.id}
                                className="border-2 border-stone-700 m-1 rounded-2xl min-w-fit max-w-lg mx-auto text-center">
                                <TitleCard clubData={club} PickTitle={pickTitle}/>
                            </div>
                        ))}
                    </div>
                ) :(
                    <></>
                )
                }
            </div>
        );
}

export default SearchResults;