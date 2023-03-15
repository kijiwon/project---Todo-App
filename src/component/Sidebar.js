import React from "react";
import { NavLink } from "react-router-dom";
import './../App.css'

function Sidebar (){
    return(
        <div className="sidebar">
            <section>
                <NavLink to='/' activeclassname='active'>Main</NavLink>
                <NavLink to='/todo' activeclassname='active'>Todo</NavLink>
                <NavLink to='/diary' activeclassname='active'>Diary</NavLink>
            </section>
        </div>
    )
}

export default Sidebar;