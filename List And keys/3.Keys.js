import React from "react";

const numbers = [1, 2, 3, 4, 5];
const todos =
    [

        {
            id: 1,
            text: "text1"

        },
        {
            id: 2,
            text: "text2"

        },
        {
            id: 3,
            text: "text3"

        }
    ]


export const listItems2 = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
);

export const todoItems = todos.map((todo, index) =>
    <li key={todo.id}>
        {todo.text}
        {index}
    </li>
);