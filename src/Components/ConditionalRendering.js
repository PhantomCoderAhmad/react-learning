import { useState } from "react";

function ConditionalRendering(){
    const [loggedIn,setloggedIn] = useState(false);
    return (
        <div className="conditional_rendering">
            <h1>Conditional Rendering</h1>
            <h1>{loggedIn ? "Welcome you are loggedIn" : "you are not loggedIn"}</h1>
        </div>
    );
}
export default ConditionalRendering;