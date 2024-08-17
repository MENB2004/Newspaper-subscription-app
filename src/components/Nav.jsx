import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">NEWSPAPER-SUBSCRIPTION-APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">ADD SUBSCRIBER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">SEARCH SUBSCRIBER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">DELETE SUBSCRIBER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">VIEW ALL</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
