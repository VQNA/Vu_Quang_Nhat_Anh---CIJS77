import React, { useState, useEffect } from "react";
import "./todo.css";

function ToDo() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {
        if (!newItem) {
            alert("Press enter an item.");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
            status: true
        };

        setItems((oldList) => [...oldList, item]);

        setNewItem("");
    }

    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    function changeState(id) {
        let ChangeTask = items.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task;
        })
        setItems(ChangeTask);
    }


    function deleteAll() {
        const newArray = []
        setItems(newArray);
    }

    useEffect(() => {
        const LSitems = JSON.parse(localStorage.getItem('items'));
        if (LSitems) {
            setItems(LSitems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);




    return (
        <div className="app">

            <input
                type="text"
                placeholder="Add task..."
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />

            <button onClick={() => addItem()}>Add</button>

            <ul>
                {items.map((item) => {
                    return (
                        <div className={item.status ? 'ongoing' : 'done'}>
                            <li key={item.id}>
                                {item.value}
                                <button
                                    className="delete-button"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="update-button"
                                    onClick={() => changeState(item.id)}
                                >
                                    {item.status ? 'Finish' : 'Unfinish'}
                                </button>
                            </li>


                        </div>
                    );
                })}
            </ul>
            {items.length > 1 ? <button onClick={deleteAll}>Delete All</button> : ""}
        </div>
    );
}
export default ToDo