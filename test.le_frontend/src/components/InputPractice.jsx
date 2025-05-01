import React, {useState} from 'react';

function InputPractice() {

    const [name,setName] = useState("");

    function NameChange(event){
        setName(event.target.value);
    }
    const [age,setAge] = useState();
    function AgeChange(event){
        setAge(event.target.value);
    }
    const [gender,setGender] = useState("");
    function GenderChange(event){
        setGender(event.target.value);
    }

    return (
            <div>

                <input value={name} onChange={NameChange} type="string" />
                <p>Name: {name}</p>

                <input value={age} onChange={AgeChange} type="number" min="0" max="120" />
                <p>Age: {age}</p>

                <label>
                    <input value="Male" type="radio"
                           checked={gender === "Male"}
                           onChange={GenderChange}/>
                    Male
                </label>
                <br/>
                <label>
                    <input value="Female" type="radio"
                           checked={gender === "Female"}
                           onChange={GenderChange}/>
                    Female
                </label>
                <p>Gender: {gender}</p>

            </div>
        );
}

export default InputPractice;