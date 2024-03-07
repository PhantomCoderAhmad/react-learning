import { forwardRef } from "react";
function ForwardRef(props,ref){
    return(
        <>
            <h1>Forward Ref</h1>
            <input type="text" ref={ref}></input>
        </>
    )
}
export default forwardRef(ForwardRef);