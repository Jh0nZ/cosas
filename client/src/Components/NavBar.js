import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-azul-fuerte text-light' data-bs-theme="dark">
      <div className='container-fluid px-lg-5'>
        <Link to={"/"} className='navbar-brand'>Friender</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className='collapse navbar-collapse d-lg-flex justify-content-between' id="navbarSupportedContent">
          <ul className='navbar-nav px-lg-5'>
            <li className='nav-item'>
              <Link to={"/"} className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to={"/amigos"} className='nav-link'>Buscar Amigos</Link>
            </li>
          </ul>
          <div className='nav-item dropdown '>
            <span class="nav-link dropdown-toggle profile-icon" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className=''><FaUserCircle/></i>
            </span>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">Acerca De</Link></li>
            <li><Link class="dropdown-item" href="#">Mi Perfil</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item " href="#">Cerrar Sesion</Link></li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
