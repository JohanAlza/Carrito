import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ListProducts } from "../../ListProducts";
import { Login } from "./Login";


const Account = () => {

    const [hasLogged, setHasLogged] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

            setHasLogged(user != null ? true : false)
        })

    }, []);
    return hasLogged == true ? <ListProducts /> : <Login />
};

export { Account };
