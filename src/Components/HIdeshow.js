import { useState } from "react";

function Hideshow(){
    let [action,setAction] = useState(true);
    return (
        <div className="hide_show">
            <h1>{action ? "heading for hide and show" : ""}</h1>
            {/* <button onClick={()=> setAction(true)}>Show</button>
            <button onClick={()=> setAction(false)}>Hide</button> */}
            <button onClick={()=> setAction(!action)}>Toggle</button>
        </div>
    );
}
export default Hideshow;