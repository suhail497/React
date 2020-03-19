import React from 'react'


class Setarrayofobjects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          fruits: [
              {
                  type:'summer',
                  name:'mango'
              }
            ]
        }
        this.selectFruit = this.selectFruit.bind(this);
      }
      selectFruit = e => {
        const itemText = e.target.value
        const currentItem = { type: itemText, name:itemText }
        this.setState({
          currentItem,
        })
      }
      selectFruit(e) {
        if(e.target.checked) {
                                this.setState(() => 
                                ({
                                    fruits: {
                                      ...this.state.fruits,
                                      type: "Summer",
                                      name: "Mango"
                                    }
                                  })
                                );
                             }
      }
      render() {
        return (
          <div>
            <form>
              <input type="checkbox" id="apple" name="fruit" value="Apple"
                      onClick={this.selectFruit}/>Apple <br/>
              <input type="checkbox" id="mango" name="fruit" value="Mango"
                      onClick={this.selectFruit}/>Mango <br/>
              <input type="checkbox" id="pear" name="fruit" value="Pear"
                      onClick={this.selectFruit}/>Pear <br/>

               <h3> {
                      this.state.fruits.map(
                      (value, position) => <p>
                      Type: {value.type}
                      Name: {value.name}
                      Position: {position}
                      </p>)
                 }
                 
                 </h3>
            </form>
          </div>
        );
      }
    }




export {Setarrayofobjects}