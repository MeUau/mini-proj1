<template>

  <!-- Navegação -->
  <nav>
      <router-link to="/QuemSouEu">Quem sou eu</router-link> |
      <router-link to="/OQueFaco">O que faço</router-link> |
      <router-link to="/Hobbies">Hobbies</router-link>  |
      <router-link to="/Readme">Readme</router-link> 
      <br><hr>
  </nav> 
  <br>  
    <!-- Componentes/Views -->
    <router-view/>
  <br>  
  <!-- Rodapé / Redes Sociais -->
  <footer>
      <hr>
      <a target="_blank" href="https://www.facebook.com/PORTUGAL/"><i class="fa fa-facebook fa-2x pr-4"></i></a>
      <a target="_blank" href="https://twitter.com/portugal"><i class="fa fa-twitter fa-2x"></i></a>
      <a target="_blank" href="https://github.com/portugal"><i class="fa fa-github fa-2x"></i></a>
      <a target="_blank" href="https://www.reddit.com/r/portugal/"><i class="fa fa-reddit fa-2x"></i></a>
  </footer>

</template>

<style scooped>

  nav{
    padding: 15px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font: bold ;
  }

  nav a.router-link-exact-active {
    color: blue;
    padding: 20px;
    background-color: beige;
    border-radius: 20px;
  }

  hr {padding:1px;background-color: beige }

  footer a {
      align-content: center;
      text-align: center;
      margin:5px;
      color: blue;
      padding: 20px;
      background-color: beige;
      border-radius: 20px;
  }
</style>
