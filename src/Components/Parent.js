import Child from "./Child";
import { useState } from "react";
function Parent(){
    let [name,setname] = useState("Ahmad yar");

    return (
        <div>
            <h1>parent component.</h1>
            <h2>Below childs are listed.</h2>
            <br/><br/>
            <button onClick={() => {setname("Ahmad Ibrar")}}>Click to change the name using state that is passing as prop</button>
            <Child name={name} email="ahmad.yar@tylextech.com" detail={{address:"Ghulshan-e-Ravi lahore", phone:"03124264067"}}/> 
            {/* name and other detail pass to child component as prop to child component  */}
            
            {/* <Child name="ali" email="ali@gmail.com" detail={{address:"Ghulshan-e-Ravi lahore", phone:"03124264067"}}/>  */}
            {/* name pass to child component as prop to child component  */}
            {/* <Child name="hamza" email="hamza@gmail.com" detail={{address:"Ghulshan-e-Ravi lahore", phone:"03124264067"}}/>  */}
            {/* name pass to child component as prop to child component  */}
        </div>
    );
}
export default Parent;