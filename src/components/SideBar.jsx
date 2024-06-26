import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <nav className="sideBar">
          <Link className="sideBar-link" to="/">Inicio</Link>
          <Link className="sideBar-link" to="NewTask">Nueva Tarea</Link>
          <Link className="sideBar-link" to="ViewTasks">Ver Tareas</Link>  
        
      </nav>
    </div>
  );
}

export default SideBar;