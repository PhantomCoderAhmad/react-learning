import { useParams, useSearchParams,useNavigate,useLocation } from "react-router-dom";
function User(){
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate(); 
    const location = useLocation();
    console.log(location);
    const age = searchParams.get('age');
    const city = searchParams.get('city');

    function navigateTo(link){
        navigate(link);
    }
    return(
        <>
            <h1>{params.name} User Detail.</h1>
            <h1>Age is: {age}</h1>
            <h1>City is: {city}</h1>
            <button onClick={()=>setSearchParams({age:40, city:"Lahore"})}>Update params value</button>
            <br/><br/><input type="text" name="name" onChange={(e)=>setSearchParams({text:e.target.value})}/>
            <br/><br/><button onClick={()=>navigate('/about-us')}>Go to About us Page</button>
            <br/><br/><button onClick={()=>navigateTo('/contact-us')}>Go to Contact us Page</button>
            
        </>
    )
}
export default User;