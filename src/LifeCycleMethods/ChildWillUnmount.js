import React from "react";

class ChildWillUnmount extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.visibility);
    }
    componentWillUnmount(){
        alert('component unmount now ');
    }
    render(){
        return(
            <div>
                <h1>ChildWillUnmount component {this.props.visibility ? "is Visible": ""}</h1>
            </div>
        )
    }
}

export default ChildWillUnmount;