import { useState } from "react";

function UseStateHook(){
    const [name,setName] = useState("Ahmad Yar");
    function handleClick (){
        setName("Ahmad Ibrar");
    }
    return (
        <div>
            <h1>useState Hook.</h1>
            <p>{name}</p>
            <button onClick={handleClick}>Click to update name</button>
        </div>
    )
}
export default UseStateHook;