import React from "react";

class ComponentDidMount extends React.Component{
    constructor(){
        super();
        this.state ={
            name:"Ahmad Ibrar"
        }
        console.log("1st");
    }
    componentDidMount(){
        console.log("2nd");//call just one a start
    }
    handleClick = () => {
        this.setState({ name: "Ahmad Yar" });
    }
    render(){
        return (
            <div>
                <h1>ComponentDidMount Life Cycle Method.</h1>
                <p>Name from state is: {this.state.name}</p>
                <button onClick={this.handleClick}>Click to update Name</button>
            </div>
        )
    }
}

export default ComponentDidMount;