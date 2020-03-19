import React from 'react'

class SetSE extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Suhail",
            age:27
        }
        this.check=this.check.bind(this);
    }

    check(){
        this.setState({
            name:"Kadarsab",
            age:30
                    })

    }

render(){
    return(
       
    <div>

        <h1>{this.state.name} </h1>
        <h2>{this.state.age} </h2>
     <button onClick={this.check}>check this</button>

    </div>


    )


}
}
export {SetSE}
