import React from "react";
import { Link } from "gatsby";

function Nav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      {navItems.map(createNavItems)}
      </div>
    </div>
  </div>
</nav>
    )
}

function createNavItems(navitem){
    return <Link class={`nav-link ${navitem.link === window.location.pathname ? 'active' : ''}`} href={navitem.link}>{navitem.name}</Link>
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
]

export default Nav;