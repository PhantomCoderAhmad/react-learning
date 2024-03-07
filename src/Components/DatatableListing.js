import DataTable from "react-data-table-component";
import { useState } from "react";
function DatatableListing(){
    const courses = ["C++","Java", "python", "php"];
    const students = [
        {name:"Ahmad yar", email:"ahmad.yar@tylextech.com",phone:"03124264067"},
        {name:"Ali", email:"Ali@tylextech.com",phone:"03124264067"},
        {name:"Hamza", email:"Hamza@tylextech.com",phone:"03124264067"},
        {name:"Noman", email:"Noman@tylextech.com",phone:"03124264067"},
    ];
    const columns = [
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
            sortFunction: (a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            },
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
            sortFunction: (a, b) => {
                if (a.email < b.email) return -1;
                if (a.email > b.email) return 1;
                return 0;
            },
        },
        {
            name: "Contact #",
            selector: row => row.phone,
            sortable: true,
            sortFunction: (a, b) => {
                if (a.phone < b.phone) return -1;
                if (a.phone > b.phone) return 1;
                return 0;
            },
        },
    ];
    const [filterText, setFilterText] = useState("");

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(filterText.toLowerCase()) ||
        student.email.toLowerCase().includes(filterText.toLowerCase()) ||
        student.phone.toLowerCase().includes(filterText.toLowerCase())
    );
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
            <DataTable
                columns={columns}
                data={filteredStudents}
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search..."
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                    />
                }
            />
        </div>
    )
}
export default DatatableListing;