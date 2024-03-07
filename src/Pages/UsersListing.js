import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { FaEdit, FaTrash } from 'react-icons/fa';

function UsersListing() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
    axios.get("http://localhost:3011/users").then(
        response => setUsers(response.data))
        .catch(error => console.error("Error fetching posts: ", error));
    },[users]);
    function handleDelete(id){
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios.delete(`http://localhost:3011/users/${id}`)
                .then(() => {
                    // Remove the deleted user from the state
                    // setUsers(users.filter(user => user.id !== id));
                    console.log("user is deleted successfully");
                })
                .catch(error => console.error("Error deleting user: ", error));
        }
    }
    function handleEdit(id){
        navigate(`/edit/user/${id}`);
    }

    const columns = [
        {
            name: "Id",
            selector: row => <Link to={`/user/${row.id}`} >{row.id}</Link>,
            sortable: true,
        },
        {
            name: "Name",
            selector: row =>row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "Actions",
            cell: row => (
                <>
                    <FaEdit onClick={() => handleEdit(row.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <FaTrash onClick={() => handleDelete(row.id)} style={{ cursor: 'pointer', color: 'red'}} />    
                </>
            ),
            right: true,
        },
    ];

    const [filterText, setFilterText] = useState("");
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filterText.toLowerCase()) ||
        user.email.toLowerCase().includes(filterText.toLowerCase())
    );

    const paginatedUsers = filteredUsers.slice((page - 1) * perPage, page * perPage);
    return (
        <>
        <Container className="d-flex ">

            
            <div className="w-100">
            <h1>Users Listing</h1>
            <Button onClick={()=>navigate('/create/user')} className="Primary float-end m-3">Add User</Button>
            <DataTable
                columns={columns}
                data={paginatedUsers}
                pagination
                paginationServer
                paginationPerPage={10}
                paginationTotalRows={filteredUsers.length}
                onChangePage={page => setPage(page)}
                onChangeRowsPerPage={perPage => {
                    setPerPage(perPage);
                    setPage(1); // Reset to page 1 when changing rows per page
                }}
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
            </Container>
        </>
    );
}

export default UsersListing;
