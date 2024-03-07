import React from "react";
import ChildWillUnmount from "./ChildWillUnmount";
class ComponentWillUnmount extends React.Component{
    constructor(){
        super();
        this.state = {
            visibility:true,
        }
    }
    handleClick = () => {
        this.setState({visibility:!(this.state.visibility)});
    }
    render(){
        return (
            <div>
                <h1>ComponentWillUnmount Life Cycle Method.</h1>
                <button onClick={this.handleClick}>Hide/Show</button>
                {this.state.visibility ? <ChildWillUnmount visibility={this.state.visibility}/>: <h1>ChildWillUnmount component is removed</h1>}
            </div>
        )
    }
}
export default ComponentWillUnmount;