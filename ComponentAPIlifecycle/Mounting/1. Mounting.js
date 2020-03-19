import React from 'react';

// Order

// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()


// 1.Render

// The render() method is the only required method in a class component.
// When called, it should examine this.props and this.state and return one of the following types:
// React elements. Typically created via JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
// Arrays and fragments. Let you return multiple elements from render. See the documentation on fragments for more details.
// Portals. Let you render children into a different DOM subtree. See the documentation on portals for more details.
// String and numbers. These are rendered as text nodes in the DOM.
// Booleans or null. Render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean.)



class Mounting extends React.Component {
    render() {
        return (
            <div>
                <h1>some ttext</h1>
            </div>
        )
    }






}
export { Mounting }