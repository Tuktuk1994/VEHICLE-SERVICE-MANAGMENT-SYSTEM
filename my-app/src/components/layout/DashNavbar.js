import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

const DashNavbar = () => {

  const onLogout=()=>{
    sessionStorage.removeItem('user')
  }
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand"  style={{color:"#eb345b"}}href="/">
          Vehicle Servicing Management Service
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{ marginLeft: 620 }}>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/myprofile">
                <Button outline color="danger">
                  My Profile
                </Button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                <Button outline color="danger" onClick={onLogout}>
                  Logout
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashNavbar
