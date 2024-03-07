import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { getUsers,deleteUser } from "../redux/usersSlice";

function UsersListing(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    
    useEffect(() => {
        dispatch(getUsers());
    },[]);
    
    function handleDelete(id){
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser(id))
            .then(() => {
                console.log("user is deleted successfully");
            })
            .catch(error => console.error("Error deleting user: ", error));
        }
    }
    function handleEdit(id){
        navigate(`/redux-user/edit/${id}`);
    }

    const columns = [
        {
            name: "Id",
            selector: row => <Link to={`/redux/user/${row.id}`} >{row.id}</Link>,
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
    return(
        <>
            <Container className="d-flex " >

            
                <div className="w-100">
                    <h1>User's  Listing Using Redux-Toolkit</h1>
                    <Button onClick={()=>navigate('/create/redux/user')} className="Primary float-end m-3">Add User</Button>
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
    )
}
export default UsersListing;