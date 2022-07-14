import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/game">
                            Game
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cats">
                            Cats
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;