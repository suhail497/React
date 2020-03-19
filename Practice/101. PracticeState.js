import React from "react";


class Exstate extends React.Component{
    constructor(){
        super();
        this.state={
            history:[
                {
                    year:2011,
                    trophy:"worldcup",
                    capition:"Dhoni",  
                    Team:"India"              
                },

                {
                    year:2019,
                    trophy:"worldcup3",
                    capition:"Morgan",  
                    Team:"England"              
                },
                {
                    year:2015,
                    trophy:"worldcup2",
                    capition:"Clark",  
                    Team:"England"              
                }
            ]
        }
    }
    render() {
        return (
            <div>
                  <h1>
                    {this.state.history.filter((element) =>{
                      
                        return element.year > 2014
                    }).map((element) => {
                        return element.year;
                    })
                    }

                    {/* {
                      this.state.history.map(
                      (value, position) => <p>
                      Value: {value.capition}
                      Position: {position}
                      </p>)

                      
                 }       */
                 }
                  
                    
                    </h1> 
                          
            </div>
        );
    }
}
export {Exstate}