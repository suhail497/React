import React from 'react';

// Set state method


class SetStateComponent extends React.Component {
    constructor() {
       super();
       this.state = {
          data: ["arjun"]
       }
      // New Property setStateHandler = SetStateComponent Method binding with SetStateComponent Properties
       this.setStateHandler1 = this.setStateHandler.bind(this);
    };
    setStateHandler() {
       var item = "setState..xvc."
       var myArray = this.state.data.slice();
       myArray.push(item);
        // SetState method doesn't replace data instead it updates data
       this.setState({data: myArray})
    };
    render() {
       return (
          <div>
             <button onClick = {this.setStateHandler1}>SET STATE</button>
             <h4>State Array: {this.state.data}</h4>
          </div>
       );
    }
 }

 export {SetStateComponent}