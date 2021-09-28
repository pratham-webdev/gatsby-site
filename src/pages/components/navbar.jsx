import React from "react";
import { Link } from "gatsby";

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      {navItems.map(createNavItems)}
      </div>
    </div>
  </div>
</nav>
    )
}


function createNavItems(navitem){
    return <Link key={navitem.id} className="nav-link" activeClassName="active" to={navitem.link}>{navitem.name}</Link>
}

const navItems = [
    {
        id:1,
        name:"Home",
        link:"/"
    },
    {
        id:2,
        name:"About",
        link:"/about"
    },
    {
      id:3,
      name:"Blog",
      link:"/blog"
  },
]

export default Nav;