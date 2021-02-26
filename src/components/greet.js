import { React } from "react";

// function Greet (){
//     return <h1>Hello Vishal</h1>
// }

const Greet = (props) => {
    return(
    <div><h1>Hello {props.name}</h1>
            {props.children}
    </div>
    )
}
export default Greet