function Child(props){
    return (
        <div className="child_div">
            {/* <h1>child component</h1> */}
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.detail.address}</h1>
            <h1>{props.detail.phone}</h1>
        </div>
    );
}
export default Child;