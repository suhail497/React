import React from 'react';


class Fragment extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>ggg</h1>
                <Table />
            </React.Fragment>
        )
    }


}

class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}
class Columns extends React.Component {
    render() {
        return (
            // <div>
            // React.Fragment short hand 
            <>
                <td>Hello</td>
                <td>World</td>
                <td>Hello</td>
                <td>World</td>
                <td>Hello</td>
                <td>World</td>
                <td>Hello</td>
                <td>World</td>
                <element />
            </>
            // </div>
        );
    }
}
const element = <Glossary items="{
    id: 123,
    term: 'Some Term',
    description: 'Some Description'
}" />

function Glossary(props) {


    return (
        <dl>
            {props.items.map(item => (
                // Without the `key`, React will fire a key warning
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}



export { Fragment }