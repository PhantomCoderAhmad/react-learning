import { useState,useEffect } from "react";
import UseEffectChild from "./UseEffectChild";
function UseEffectHook(){
    const [Count,setCount] = useState(0);
    const [name, setName] = useState("Ahmad");
    useEffect(()=>{
        console.log("useEffect called at time of updating name state");
    },[name]); //specified this hook only for name
    return (
        <div>
            <h1>UseEffect Hook.</h1>
            <p>Count that is defined in state is: {Count}</p>
            <button onClick={()=>setCount(Count+1)}>Click to update Count</button><br/><br/>
            <button onClick={()=>setName("Ahmad Ibrar")}>Click to update Name</button>

            <UseEffectChild name={name}/>
        </div>
    )
}
export default UseEffectHook;