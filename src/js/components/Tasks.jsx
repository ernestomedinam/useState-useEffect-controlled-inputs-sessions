import React, { useEffect, useState } from "react";

export const Tasks = (props) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    async function addTask() {
        // take the user input
        // turn it into a task payload for the post endpoint
        const payload = {
            label: newTask,
            is_done: false
        };
        // fetch to post the task on the API
        const postTaskURL = "https://playground.4geeks.com/todo/todos/papas-fritas";
        let response = await fetch(
            postTaskURL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            alert(`we could not create the task, api says: ${response.status}, ${response.statusText}`);
        } else {
            setNewTask("");
            getTasksFromAPI();
        }
    };
    function removeTask(id) {
        throw Error("not implemented!! 😐");
    };
    function getTasksFromAPI() {
        // fetch todos api for user papas-fritas
        const getTasksURL = "https://playground.4geeks.com/todo/users/papas-fritas";
        fetch(getTasksURL)
            .then((response) => {
                if (!response.ok) {
                    alert("something went wrong with the api request 😑");
                } else {
                    return response.json()
                }
            })
            .then((body) => {
                const todos = body.todos;
                setTasks(todos);
            });
    };
    useEffect(() => {
        getTasksFromAPI();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <ul>
                    {tasks.map((task, index) => {
                        return (
                            <li
                                // style={{
                                //     color: (task.is_done) ? "green" : "orange"
                                // }}
                                onClick={(event) => removeTask(task.id)}
                                key={task.id}>{task.label}</li>
                        );
                    })}
                </ul>
            </div>
            <div className="row">
                <div className="col-12">
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="task's label"
                        onChange={(event) => setNewTask(event.target.value)}
                        onKeyDown={(event) => {
                            console.log(">>> 😀 this is the key that was pressed:", event.key);
                            if (event.key === "Enter") {
                                // we would add task
                                addTask();
                                event.stopPropagation();
                                event.preventDefault();
                            }
                        }}
                        value={newTask} />
                    <button
                        onClick={(event) => {
                            // add the new friend
                            // create a new array with all the items
                            // in friends, plus the userInput (new friend)
                            addTask();
                        }}
                        className="btn btn-primary">
                        add task
                    </button>
                    <p className="m-4">you have {tasks.length} tasks left!!</p>
                </div>
            </div>
        </div>
    );
};
