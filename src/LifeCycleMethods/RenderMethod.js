import React from "react";
import ChildRender from './ChildRender';

class RenderMethod extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Ahmad Ibrar"
        };
    }

    handleClick = () => {
        this.setState({ name: "Ahmad Yar" });
    }

    render() {
        return (
            <div>
                <h1>Render Life Cycle Method</h1>
                <ChildRender name={this.state.name}/>
                <button onClick={this.handleClick}>Click to Update name</button>
            </div>
        );
    }
}

export default RenderMethod;
