function Arraylisting(){
    const courses = ["C++","Java", "python", "php"];
    const students = [
        {name:"Ahmad yar", email:"ahmad.yar@tylextech.com",phone:"03124264067"},
        {name:"Ali", email:"Ali@tylextech.com",phone:"03124264067"},
        {name:"Hamza", email:"Hamza@tylextech.com",phone:"03124264067"},
        {name:"Noman", email:"Noman@tylextech.com",phone:"03124264067"},
    ];
    return (
        <div>
            <h1>Array Listing</h1>
            <h1>Courses</h1>
            {
                courses.map((data,index)=>
                    <p>{data}</p>
                )
            } 

            <h1>Students</h1>
            <table className="table table-bordered">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact #</td>
                </tr>
            
            {
                students.map((data)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                </tr>
                   
                )
            }
            </table>
        </div>
    )
}
export default Arraylisting;