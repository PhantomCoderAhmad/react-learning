import React from "react";

class ShouldComponentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log("1st");
    }

    shouldComponentUpdate() {
        console.log("hello");
        return true;
        // true to allow False to stop
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }
     render() {
        console.log("3rd");

        return (
            <div>
                <h1>shoul ShouldComponentUpdate Life Cycle Method.</h1>
                <p>Count from state is: {this.state.count}</p>
                <button onClick={this.handleClick}>Click to update count</button>
            </div>
        )
    }
}

export default ShouldComponentUpdate;
