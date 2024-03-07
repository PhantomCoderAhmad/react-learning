import { useParams } from "react-router-dom";
function ReduxUserDetail(){
    const params = useParams();
    return(
        <>
            <h1>this redux user id is: {params.id}</h1>
        </>
    )
}
export default ReduxUserDetail;