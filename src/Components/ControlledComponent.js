import { useState } from "react";

function ControlledComponent(){
    const [name, setName] = useState('');
    return(
        <>
            <h1>Controlled Component</h1>
            <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)}></input>
        </>
    )
}
export default ControlledComponent;