// React Import
import React from "react";


// // 1. JSX Imports
import { NestedElements, Attribute, Expression, Styling } from './1. JSXelemets'

// // 2. Components Imports
import { StatelessExample } from './2. Statelesscomponent'
import { StatefulExample } from './3. Statefulcomponent'

// //  3. State Example 
import { StateExampleCheck, DerivedClass } from './4. StateExample'
// import { Exstate } from './101. PracticeState'
//   4.Props
import { PropsExample, } from './5. CompenentandProps'
import { Propsvalidation } from './6.PropsVadlidation'
//  5. ComponentAPIlifecycle

import { SetStateComponent } from './ComponentAPI/1.Setstate'
import { ForceUpdate } from './ComponentAPI/2. Forceupdate'
import { FindDOM } from "./ComponentAPI/3.FindDOM"
// import { GenearalStatelifecycleMounting } from './ComponentAPI/5.GenearalStatelifecycleMounting'



import { BasicRouting } from './Routing/1.BasicRouting'
import { ParamsExample } from './Routing/2.URLparameters'
import { NestingExample } from './Routing/3.NestingRoute'
import { AuthExample } from './Routing/4.Redirect'


import { Mounting } from './ComponentAPIlifecycle/Mounting/1. Mounting'
import { Fragment } from './ComponentAPIlifecycle/Mounting/2.Fragments'
import { Task } from "./ComponentAPI/6. MountUpdating"


// EVent handling

import { Toggle, ActionLink } from './Handlingevents/1.Events';
import { Childevent } from "./Handlingevents/2.Childevents";

// Form

import { Form } from "./Forms/1.Firstform";
import { Complexform } from './Forms/2.Complexform';

// Refs
import { Reference } from "./Forms/References/1.Refs"



// import { Greeting } from "./Conditinalrendering/1. Condinatalrendering";

import { LoginControl } from "./Conditionalrendering/2.ElementVaribles";
import { Mailbox } from "./Conditionalrendering/3.Inlineeifhandoperator";
import { Inline, LoginControl2 } from "./Conditionalrendering/4.Inlineifelse";

import { Page } from "./Conditionalrendering/5.Preventcomprendering";


// list and keys
import { listItems, element } from "./List And keys/1.Renderingmulcomp";

import { NumberList } from "./List And keys/2.Basiclist"

import { listItems2, todoItems } from "./List And keys/3.Keys"
import { NumberList3 } from "./List And keys/4.Extractingcompandkeys"

import { Blog } from "./List And keys/5.Blogwithkey";

import { Usingstate } from "./List And keys/6.Usingstatespropsandkeys";



// Practice

// import {Greeting} from 'C:\Users\Admin\Desktop\React\react_basic\src\Practice\1.Setstate.js'
// import { Greeting } from './ComponentAPI/1.Setstate copy';
import { SetSE } from './Practice/1.Setstateobj';
// import { Setarray } from './Practice/2.StateEarray';
import { Setarrayofobjects } from './ComponentAPI/4.Setstatearrayobjects';




// // Material UI Imports
// import { makeStyles } from "@material-ui/core/styles";
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// // import BottomNavigation from "@material-ui/core/BottomNavigation";
// // import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// // import RestoreIcon from "@material-ui/icons/Restore";
// // import FavoriteIcon from "@material-ui/icons/Favorite";
// // import LocationOnIcon from "@material-ui/icons/LocationOn";

// // makeStyles function from Material UI
// // const useStyles = makeStyles({ 
// //   root: {
// //     width: 500
// //   },
// //   label: {
// //     color: "red"
// //   }
// // });

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header from state...",
      content: "Content from state..."
    }
    this.messages = ['React', 'Re: React', 'Re:Re: React'];

  }
  render() {

    // const messages = ['React', 'Re: React', 'Re:Re: React'];

    //             // const classes = useStyles();

    //             // const [value, setValue] = React.useState(0);

    const numbers = [1, 2, 3, 4, 5];

    const posts = [
      { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
      { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ];


    return (
      <div>

        {/* 1. JSX [JavaScript Extended] */}

        {/* 1.1 Nested Elements */}
        <NestedElements />

        {/* 1.2 Attributes */}
        <Attribute />

        {/* 1.3 Expression */}
        <Expression />

        {/* 1.4 Styling */}
        <Styling />

        {/* 2. Components  */}

        {/* 2 Stateless Component */}
        <StatelessExample />

        {/* 3.StatefulExample */}
        <StatefulExample />

        {/* 3. State Example */}
        <h1>{this.state.header}</h1>
        <p>{this.state.content}</p>
        <StateExampleCheck />
        <DerivedClass />

        {/* 4. Props Example  */}
        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.footerProp}</h2>

        {/* 5. Default Props */}
        {/* <Exstate /> */}

        {/* props Example */}
        <PropsExample />
        {/* 6. Propsvalidation */}
        <Propsvalidation />
        {/* 7.ComponentAPIlifecycle */}
        {/*1. Setstatecomponent */}

        <SetStateComponent />

        {/* Setarrayofobjects */}
        <Setarrayofobjects />
        {/* 2. ForceUpdate */}
        <ForceUpdate />

        <FindDOM />
        {/* <Clock /> */}


        {/* Routing */}
        <BasicRouting />

        <ParamsExample />

        <NestingExample />


        <AuthExample />

        {/* Component APi Lifecycle */}
        {/* 1.Mounting */}
        <Mounting />
        {/* 2.Fragment */}
        <Fragment />
        {/* Mount Update */}

        {/* <Task /> */}



        {/* Handling events */}
        <Toggle />
        <ActionLink />


        {/* Forms */}
        <Form />
        <Childevent />
        <Complexform />


        {/* refs */}
        <Reference />

        {/* Conditonal */}
        {/* <Greeting isLoggedIn={true} /> */}
        <LoginControl />


        <Mailbox unreadMessages={this.messages} />
        <LoginControl2 />
        <Page />

        {/* list and keys */}
        <ul>

          {listItems}
          {element}

        </ul>

        <NumberList numbers={numbers} />
        {/* keys */}

        <ul>

          {listItems2}
          {todoItems}

        </ul>


        <NumberList3 numbers={numbers} />
        <Blog posts2={posts} />




        <Usingstate />



        {/* Practice */}
        {/* <Greeting /> */}
        <SetSE />
        {/* <Setarray/> */}
      </div >

    );
  }

}


App.defaultProps = {
  headerProp: "Suhail",
  footerProp: "Nadeem"
}



