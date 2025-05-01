import React, {useState,useEffect} from 'react';
import {TfiPencil, TfiAngleDown, TfiAngleUp, TfiTrash} from "react-icons/tfi";
function ToDoList(){

    const [tasks,setTasks] = useState([]);
    const [taskTitle,setTaskTitle] = useState("TaskTitle");
    const [taskNote,setTaskNote] = useState("");
    const [seeNote,setSeeNote] = useState(false);

    useEffect(()=> {
        let tsk = "tasks"
        if(tasks.length === 1)
            tsk = "task";
        document.title = `You have ${tasks.length} active ${tsk}`;
    });

    function handleTaskTitleChange(event){
        setTaskTitle(event.target.value);
    }
    function handleTaskNoteChange(event){

        const {note,value} = event.target;
        setTasks((t) => ({...t, [note]: value,}));

    }

    function toggleNote(event){
        if(seeNote)
            setSeeNote(false)
        else
            setSeeNote(true)
    }

    function addTask(){
        if(taskTitle.trim() !== "") {
            const newTask = {title: taskTitle, note: taskNote};

            setTasks(t => [...t, newTask]);
            setTaskTitle("");
            setTaskNote("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i!==index);
        setTasks(updatedTasks)
    }

    function upTask(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function DownTask(i){

    }

        return (
            <div>
                {/*/!*Navbar*!/*/}
                {/*<input className="outline-none bg-transparent w-screen border-none text-center p-5 text-5xl font-bold text-gray-200"*/}
                {/*       value = {listName}*/}
                {/*       onChange={handleListNameChange}*/}
                {/*/>*/}

                {/*Container*/}
                <div className = "relative container mx-auto p-1.5 bg-gray-200 flex items-center justify-between">
                    <TfiPencil className="mr-2 ml-1"/>
                    <input className="outline-none font-bold w-screen p-0.25 bg-transparent"
                           type = "text"
                           value = {taskTitle}
                           placeholder="Enter a new task"
                           onChange={handleTaskTitleChange}
                    />


                    <button className = "mx-3 border-solid border-6 font-bold text-gray-800 hover:text-gray-400"
                        onClick={addTask} >
                        +
                    </button>
                </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                {tasks.length === 0 ?(
                    <title className="flex items-center justify-center p-5 text-6xl font-bold font-sans text-gray-200">
                        You have no active tasks
                    </title> ) : (
                <title className="flex items-center justify-center p-5 text-6xl font-bold font-sans text-gray-200"> ACTIVE TASKS </title>
                )}
                <div>
                    <ul>
                        {tasks.map((tasks,index) =>
                            <li key={index}
                                className = "relative container mx-auto p-1.5 bg-gray-200 border-2 border-gray-700 flex items-center justify-between font-bold">
                                <span className="outline-none text-3xl font-bold p-0.25 bg-transparent">
                                    {tasks.title}
                                    <br/>



                                    {seeNote &&
                                        <div>
                                            <input className="outline-none w-screen p-0.25 bg-transparent"
                                                   type = "text"
                                                value = {tasks.note}
                                                placeholder="Enter note"
                                                onChange={(e) => handleTaskNoteChange(e,index)}
                                            />
                                        </div>
                                    }
                                    <button className="font-sans mt-2 text-opacity-30 text-gray-800 hover:text-gray-400"
                                            onClick={toggleNote}>
                                        {!seeNote ? 'See Note' : 'Hide Note'
                                        }
                                    </button>


                                </span>
                                <div>
                                    <button className = "mx-3 border-solid font-bold text-gray-800 hover:text-gray-400"
                                            onClick={() => setEdit(true)}>
                                        <TfiPencil/>
                                    </button>
                                    <button className = "mx-3 border-solid font-bold text-gray-800 hover:text-gray-400"
                                        onClick={() => deleteTask(index)}>
                                        <TfiTrash />
                                    </button>
                                    <button className = "mx-3 border-solid border-6 font-bold text-gray-800 hover:text-gray-400"
                                        onClick={() => upTask(index)}>
                                        <TfiAngleUp />
                                    </button>
                                    <button className = "mx-3 border-solid border-6 font-bold text-gray-800 hover:text-gray-400"
                                        onClick={() => downTask(index)}>
                                        <TfiAngleDown/>
                                    </button>
                                </div>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        );
}

export default ToDoList;