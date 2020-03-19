import React from 'react'

// Manual updating process

class ForceUpdate extends React.Component {
   constructor() {
      super();

      this.forceUpdateHandler1 = this.forceUpdateHandler.bind(this);
   };
   forceUpdateHandler() {
      this.forceUpdate();
   };
   render() {
      return (
         <div>
            <button onClick={this.forceUpdateHandler1}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }



}

export { ForceUpdate }