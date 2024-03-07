import { useMemo, useState } from "react";

function UseMemoHook(){
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    const multiCountMemo = useMemo( function multiCount(){
        console.log("caling");
        return count*5;
        // when we upadting item only and still we are not calling or 
        // updating count but still this console working means still that function is calling
    },[count]);
    return(
        <>
        <h1>UseMemo Hook</h1>
        <p>{count}</p>
        <p>{item}</p>
        <p>{multiCountMemo}</p>
        <button onClick={() => setCount(count+1)}>Update Count</button>
        <button onClick={() => setItem(item*10)}>Update Item</button>
        </>
    )
}
export default UseMemoHook;