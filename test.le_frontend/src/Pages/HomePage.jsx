import React, {Component} from 'react';
import ToDoList from "../components/ToDoList.jsx";
import Navbar from "../components/GameElements/Navbar.jsx";
import GuessBox from "../components/GameElements/GuessBox.jsx";
import FetchTestCards from "../components/GameElements/FetchTestCards.jsx";

function HomePage(){
        return (
            <div>
                <Navbar/>
                <GuessBox/>
                {/*<FetchTestCards/>*/}
            </div>
        );
}

export default HomePage;