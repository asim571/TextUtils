import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(prop) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}${prop.setBlue}${prop.setGrey}${prop.setGreen}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{prop.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{prop.about}</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className={`form-control me-2 form-bg${prop.mode}${prop.setBlue}${prop.setGrey}${prop.setGreen}`} type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-bg-${prop.mode}${prop.setBlue}${prop.setGrey}${prop.setGreen}`} type="submit">Search</button>
            </form>
            <button type="button" class="btn btn-primary mx-2" onClick={prop.setBlue} >Blue</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={prop.setGrey}>Grey</button>
            <button type="button" class="btn btn-success mx-2" onClick={prop.setGreen}>Green</button>
            <div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'} `}>
            <input className="form-check-input mx-3" onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlForfor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, about: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title : "Stranger",
    about : "Who are you ?"
}
