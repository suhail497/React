import React from "react";


function ListItem3(props) {
    const value = props.value;
    const key = props.key;

    return (
        // Wrong! There is no need to specify the key here:
        <li>
            {value}
        </li>
    );
}
function NumberList3(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // The key should have been specified here:

        <ListItem3 key={number.toString()}
            value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}


export { NumberList3 }