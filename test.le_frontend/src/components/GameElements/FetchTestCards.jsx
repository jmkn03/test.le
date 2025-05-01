import React, {Component, useState, useEffect} from 'react';
import TitleCard from "./TitleCard.jsx";



function FetchTestCards() {
    const [clubData , setClubData] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect( ()=> {
            const fetchClubData = async () => {
                try {
                    const res = await fetch('http://localhost:8080/api/content');
                    const data = await res.json();
                    setClubData(data);
                } catch (error) {
                    console.log("Error fetching data", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchClubData();
    },[]);

    return (
        <div>
            <br/>
            <div className="bg-transparent w-screen border-none text-center p-2 text-2xl font-bold text-stone-700"> List of available clubs: </div>
            {loading ?
                (<h2> Loading... </h2>) :
                (<div>
                        {clubData.map((club) => (

                            <TitleCard key={club.id} clubData={club} className="bg-transparent w-screen border-none text-center p-1 font-bold text-stone-700" />
                        ))}
                </div>
                )}
        </div>
    );
}

export default FetchTestCards;