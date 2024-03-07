import { useState } from "react";

function InputChange(){
    let [data,setData] = useState(null);
    let [visible,setVisible] = useState(false);
    return (
        <div>

            <h1>Here we will get the data whatever we entered in this input field.</h1>
            <h2>here below we will get the data: <br/><br/>{data}</h2>
            {/* <textarea type="text" onChange={getInputVal}/> */}
            <textarea type="text" onChange={getInputVal}/>

            {/* this upwards code is for onchange */}
            {/* this below code is for onclick using button and also ternary operator*/}
            <h2>{visible ? data: "button not clicked"}</h2>
            <br/><br/>
            <button onClick={() => setVisible(true)}>click here to show input value.</button>
            
        </div>
    );

    function getInputVal(val){
        setData(val.target.value);
        console.log("inpout value is: ",val.target.value);
    }
}
export default InputChange;