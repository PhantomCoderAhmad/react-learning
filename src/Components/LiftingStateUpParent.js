import LiftingStateUpChild from "./LiftingStateUpChild";

function LiftingStateUpParent(){
    function parentAlert(message) {
        console.log(`Parent received message: ${message}`);
    }
    
    return(
        <>
            <LiftingStateUpChild alert={parentAlert}/>
        </>
    )
}
export default LiftingStateUpParent;