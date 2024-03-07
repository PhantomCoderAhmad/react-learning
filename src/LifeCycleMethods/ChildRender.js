import React from "react";

class ChildRender extends React.Component{

    render(){
        return (
            <div>
                <h1>Child component to use props.</h1>
                <p>Name: {this.props.name}</p>
            </div>
        )
    }
}

export default ChildRender;