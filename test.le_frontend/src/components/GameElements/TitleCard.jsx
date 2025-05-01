import React, {Component} from 'react';

function TitleCard({clubData,PickTitle}) {

        return (
            <div className="bg-transparent justify-center text-center p-2 mx-auto text-2xl font-bold text-stone-700
                            cursor-pointer border-gray-200 hover:bg-stone-300 hover:rounded-2xl"
                 onClick = {() => PickTitle(clubData.title)}>
                {clubData.title}
            </div>
        );
}


export default TitleCard;