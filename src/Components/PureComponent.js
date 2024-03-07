// pure componegt is just for class based component
import React from "react";
class PureComponent extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            count:1
        }
    }
    render(){
        console.log("rendering");
        // on every click funtion is rendering even the state value is same so for this we will use PureComponent
        return (
            <>
            <p>Count is: {this.state.count}</p>
            <button onClick={()=>this.setState({count:this.state.count})}>Update count</button>
            {/* now component is not rendering and when we will do count+1 then it will start rendering */}
            </>
        )
    }
}
export default PureComponent; 