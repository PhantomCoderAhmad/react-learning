import { useParams } from "react-router-dom";
function UserDetail(){
    const params = useParams();
    return(
        <>
            <h1>this user id is: {params.id}</h1>
        </>
    )
}
export default UserDetail;