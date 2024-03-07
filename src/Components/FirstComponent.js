import { useState } from "react";
import Child from "./Child";
//useState is a hook that is used to manage state in component

function FirstComponent(){
    // let name = "Ahmad";
    let [name, setname] = useState("Ahmad");
    return (
        <div>
          <h1>Hello {name}</h1>
          {/* <button onClick={Click}>Click me</button> //simple variable accessing */}
          <button onClick={Click}>Click to change the name using state</button>
          {/* this is using function */}
         
          {/* here we ate using states to change the prop value */}

        </div>
      );
      function Click(){
        setname("Ahmad Yar");
        // name = "Ahmad Yar"; //simple variable accessing
        alert(name);
        //here value of name variable in alert is changed but at top name variable value didnt changed.
        // thats why we use states and props for updating data
      }
}
export default FirstComponent;