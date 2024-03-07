import React from "react";

class ConstructorMethod extends React.Component{
    constructor(){
        super();
        // this will call first most
        console.warn("this is constructor");
        this.state={
            name:"ahmad"
        }
    }
    render(){
        return (
            <div>
                <h1>Constructor Life Cycle Method</h1>
                <p>Name from state that is loading using constructor:  {this.state.name}</p>
            </div>
        )
    }
} 
export default ConstructorMethod;