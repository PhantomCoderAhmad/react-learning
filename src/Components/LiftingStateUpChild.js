 
function LiftingStateUpChild(props) {
    return (
      <>
        <h1>Child Component</h1>
        <button onClick={() => props.alert("Hello from child")}>Click to pass data from child to parent</button>
      </>
    );
  }
export default LiftingStateUpChild;