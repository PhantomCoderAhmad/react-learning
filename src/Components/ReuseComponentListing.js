import DataTable from "react-data-table-component";
import { useState } from "react";
import ChildReuseComponentListingTable from "./ChildReuseComponentListingTable";
function DatatableListing(){
    const students = [
        {name:"Ahmad yar", email:"ahmad.yar@tylextech.com",phone:"03124264067"},
        {name:"Ali", email:"Ali@tylextech.com",phone:"03124264067"},
        {name:"Hamza", email:"Hamza@tylextech.com",phone:"03124264067"},
        {name:"Noman", email:"Noman@tylextech.com",phone:"03124264067"},
    ];
    
    
    return (
        <div>
            <h1>Component Reusing on listing</h1>
            <h1>Students</h1>
            {
                students.map((item)=>
                    <ChildReuseComponentListingTable data={item}/>
                )
                
            }
        </div>
    )
}
export default DatatableListing;