// import React from "react";
// import


//     // An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
//     // static getDerivedStateFromProps()
//     // shouldComponentUpdate()
//     // render()
//     // getSnapshotBeforeUpdate()
//     // componentDidUpdate()


//     class Task extends React.Component {
//         constructor(props, context) {
//             super(props, context);
//             this.state = {
//                 name: "",
//                 age: "",
//                 country: ""
//             };
//         }
//         componentDidUpdate() {
//             this._commitAutoSave();
//         }
//         _changeName = (e) => {
//             this.setState({ name: e.target.value });
//         }
//         _changeAge = (e) => {
//             this.setState({ age: e.target.value });
//         }
//         _changeCountry = (e) => {
//             this.setState({ country: e.target.value });
//         }
//         _commitAutoSave = () => {
//             Ajax.postJSON('/someAPI/json/autosave', {
//                 name: this.state.name,
//                 age: this.state.age,
//                 country: this.state.country
//             });
//         }
//         render() {
//             let { name, age, country } = this.state;
//             return (
//                 <form>
//                     <input type="text" value={name} onChange={this._changeName} />
//                     <input type="text" value={age} onChange={this._changeAge} />
//                     <input type="text" value={country} onChange={this._changeCountry} />
//                 </form>
//             );
//         }
//     }


// export { Task }