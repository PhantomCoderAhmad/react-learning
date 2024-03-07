import React from "react";

class ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        this.state ={
            name:"Ahmad Ibrar"
        }
        console.log("1st");
    }
    componentDidUpdate(prevProp, prevState, snapshot){
        //just only call wen only state or prop is update
        //when upadte button is clicked then 
        console.log("2nd", prevState);
    }
    handleClick = () => {
        this.setState({ name: "Ahmad Yar" });
    }
    render(){
        console.log("3rd");

        return (
            <div>
                <h1>ComponentDidUpdate Life Cycle Method.</h1>
                <p>Name from state is: {this.state.name}</p>
                <button onClick={this.handleClick}>Click to update Name</button>
            </div>
        )
    }
}

export default ComponentDidUpdate;