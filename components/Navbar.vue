<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark">
      <nuxt-link to="/">
        <a class="navbar-brand text-white">eShop</a>
      </nuxt-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <nuxt-link
              class="nav-link text-white"
              to="/Sneakers"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Sneakers</nuxt-link>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link class="dropdown-item" to="/Sneakers/Jordans">Jordans</nuxt-link>
              <nuxt-link class="dropdown-item" to="/Sneakers/Vans">Vans</nuxt-link>
              <nuxt-link class="dropdown-item" to="/Sneakers/Supreme">Supreme</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link
              class="nav-link text-white"
              to="/Watches"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Watches</nuxt-link>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link class="dropdown-item" to="/Watches/Rolex">Rolex</nuxt-link>
              <nuxt-link class="dropdown-item" to="/Watches/Garmin">Garmin</nuxt-link>
              <nuxt-link class="dropdown-item" to="/Watches/G-Shock">G-Shock</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link
              class="nav-link text-white"
              to="/Bikes"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Bikes</nuxt-link>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link class="dropdown-item" to="/Bikes/Giant">Giant</nuxt-link>
              <nuxt-link class="dropdown-item" to="/Bikes/Trek">Trek</nuxt-link>
              <nuxt-link class="dropdown-item" to="/Bikes/Scott">Scott</nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>