import React, { useContext } from 'react';
import {loginContext} from '/loginService'  

const useLoginContext = () => {
    const { loggedin, log } = useContext(loginContext);

    const setLoggedin = (value) => {
        // Here, you might perform any additional operations you need
        // before setting the loggedin value, such as logging in a user.
        log(value);
    };

    return { loggedin, setLoggedin };
};

export default useLoginContext;
