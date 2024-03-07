import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    const navigate = useNavigate();
    const { Component } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let isLogin = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(!!isLogin); // Convert to boolean
        if (!isLogin) {
            navigate('/login');
        }
    }, [navigate]);

    return isLoggedIn ? <Component /> : null;
}

export default Protected;
