import { React } from "react";

// function Greet (){
//     return <h1>Hello Vishal</h1>
// }

const Greet = ({name,hName}) => {
    return(
    <div><h1>Hello {name}  {hName}</h1>
            {/* {props.children} */}
    </div>
    )
}
export default Greet