// Mutable & Immutable Data
// 1. An object whose value can be changed is called Mutable Data
// 2. An object whose value cannot be changed is called Immutable Data


// State are Mutable Data the can be changed which are generally declared in Container Components
// Props are Immutable Data the cannot be changed which are generally used for Child Components

import React from 'react';
// import ReactDOM from "react-dom";

class PropsExample extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "content from props",
         content: "content from props"
      }
   }


   render() {
      return (
         <div>

            <Header headerProp={this.state.header} />
            <Content contentProp={this.state.content} />
            <Welcome1 />
         </div>

      )
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

function Welcome(props) {
   return <h1>Hello, {props.name}</h1>;
}

// class Welcome1 {
//    return(
//             <div>
//    <h1> hello</h1>

//          </div >
//          )
//    }



function Welcome1(props) {
   return <h1>Hello, {props.name}</h1>;
}
function App1() {
   return (
      <div>
         <Welcome name="Sara" />
         <Welcome name="Cahal" />
         <Welcome name="Edite" />
      </div>
   );
}
// ReactDOM.render(
//    <App />,
//    document.getElementById('root')
// );

//  Component we can update the mulitple elements


export { PropsExample }
