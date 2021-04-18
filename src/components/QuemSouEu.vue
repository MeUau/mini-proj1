<template>
  <div class="center">

    <img src="..\assets\thispersondoesnotexist.jpg" alt="J. Thispersondoesnotexist.jpg">
    <p> O meu nome é {{nome}}, tenho {{idade}} anos e vivo em  {{morada}} com a minha família</p>
      <table class="center">
        <td><img src="..\assets\wife1.jpg" alt="A. Thispersondoesnotexist.jpg"></td>  
        <td><img src="..\assets\filho1.jpg" alt="B. Thispersondoesnotexist.jpg"></td>
        <td><img src="..\assets\filho2.jpg" alt="C. Thispersondoesnotexist.jpg"></td> 
      </table>

  </div>    
</template>

<script>
export default {
  name:'QuemSouEu',
  props: {
    nome: String,
    idade:Number,
    morada: String
  }
}
</script>

<style scoped>
  p {
    color:black;
    padding: 15px;
  }
  img {
    max-width: 25%;
  }  
  .center
  {    
      margin-left: auto;
      margin-right: auto;
  }
</style>