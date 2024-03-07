import React,{createRef} from "react";
class RefComponentClassBased extends React.Component{
    constructor(){
        super();
        this.inputRef = createRef();

    }
    handleRef=()=>{
        this.inputRef.current.value = 10;
        this.inputRef.current.style.color = "red";

    }
    render(){
        return(
            <>
            <h1>Ref Component Class Based</h1>
            <input type="text" ref={this.inputRef}></input><br/><br/>
            <button onClick={this.handleRef}>Click to achieve ref functionality on input</button>
            </>
        )
    }

}
export default RefComponentClassBased;
