import {useState} from "react";
function FormHandling(){
    const[name,setName]=useState("");
    const[interest,setInterest]=useState("");
    const[tnc,setTnc]=useState("");
    function getformdata(e){
        console.log("form data is: ",name,interest,tnc);
        e.preventDefault();
    }
    return (
        <div className="form_handling">
            <h1>Form Handling</h1>
            <form className="data_form" onSubmit={getformdata}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option >select option</option>
                    <option >two</option>
                    <option >three</option>
                    <option >four</option>
                </select><br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and conditions</span><br/><br/>
                <button type="submit">Submit </button>
            </form>
        </div>

    );
}
export default FormHandling;