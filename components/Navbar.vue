<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark">
      <a class="navbar-brand">
        <nuxt-link to="/">eShop</nuxt-link>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link">
              <nuxt-link
                class="nav-link text-white"
                to="/Sneakers"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Sneakers</nuxt-link>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link rel="preload" class="dropdown-item" to="/Sneakers/Jordans">Jordans</nuxt-link>
              <nuxt-link rel="preload" class="dropdown-item" to="/Sneakers/Vans">Vans</nuxt-link>
              <nuxt-link rel="preload" class="dropdown-item" to="/Sneakers/Supreme">Supreme</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link">
              <nuxt-link
                class="nav-link text-white"
                to="/Watches"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Watches</nuxt-link>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link rel="preload" class="dropdown-item" to="/Watches/Rolex">Rolex</nuxt-link>
              <nuxt-link rel="preload" class="dropdown-item" to="/Watches/Garmin">Garmin</nuxt-link>
              <nuxt-link rel="preload" class="dropdown-item" to="/Watches/G-Shock">G-Shock</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link">
              <nuxt-link
                class="nav-link text-white"
                to="/Bikes"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Bikes</nuxt-link>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link rel="preload" class="dropdown-item" to="/Bikes/Giant">Giant</nuxt-link>
              <nuxt-link rel="preload" class="dropdown-item" to="/Bikes/Trek">Trek</nuxt-link>
              <nuxt-link rel="preload" class="dropdown-item" to="/Bikes/Scott">Scott</nuxt-link>
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