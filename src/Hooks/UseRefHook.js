import { useRef } from "react";  
import ForwardRef from '../Hooks/ForwardRef';
function UseRefHook(){
    const inputRef = useRef(null);
    const childInputRef = useRef(null);
    function handleInputRef(){
        inputRef.current.value = 100;
        inputRef.current.focus();
        inputRef.current.style.color = "red";

    }
    function updateInput(){
        childInputRef.current.value = 100;
    }
    return(
        <>
            <h1>useRef Hook</h1>
            <input type="text" ref={inputRef}></input><br/><br/>
            <button onClick={handleInputRef}>Click to use Input Ref</button>
              
            <ForwardRef ref={childInputRef}/>
            <button onClick={updateInput}>Forward Ref</button>

        </>
    )
}
export default UseRefHook;