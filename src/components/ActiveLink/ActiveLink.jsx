import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive ? "text-danger text-decoration-none " : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;