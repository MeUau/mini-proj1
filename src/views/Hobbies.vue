<template>
  <div class=center>
    <table>

      <tr>
        <th>Arte abstrata</th>
        <th>Química (Síntese molecular)</th>
      </tr>
      <tr>
        <td><iframe src="https://thisartworkdoesnotexist.com" scrolling="no"></iframe></td>
        <td><iframe src="https://thischemicaldoesnotexist.com" scrolling="no"></iframe></td>
      </tr>
      <tr>
        <td>
          <ul>
            <li><a href="https://thisartworkdoesnotexist.com" target="_blank" rel="noopener">A minha ausência é a tua essência</a></li><br>
            <li><a href="https://thisartworkdoesnotexist.com" target="_blank" rel="noopener">Vagabundo digital</a></li><br>
            <li><a href="https://thisartworkdoesnotexist.com" target="_blank" rel="noopener">Só eu sei como te chamas</a></li><br>
            <li><a href="https://thisartworkdoesnotexist.com" target="_blank" rel="noopener">Aconteceu amanhã</a></li><br>
            <li><a href="https://thisartworkdoesnotexist.com" target="_blank" rel="noopener">Nigthmare spaghetti</a></li><br>
          </ul>
        </td>
        <td>
          <ul>
            <li><a href="https://thischemicaldoesnotexist.com" target="_blank" rel="noopener">Aroma de trufa</a></li><br>
            <li><a href="https://thischemicaldoesnotexist.com" target="_blank" rel="noopener">Cheiro do queijo de Nisa</a></li><br>
            <li><a href="https://thischemicaldoesnotexist.com" target="_blank" rel="noopener">Feromonas da Tinea pellionella</a></li><br>
          </ul>
        </td>
      </tr>

    </table>

  </div>
</template>

<script>
  export default {
    name: "Hobbies" 
  }

</script>
<style scoped>
  .center {
    display: flex;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
  }
  h3{
    font-style:bold;
  }
  iframe{
    margin:0; 
    border:none;
    overflow:hidden;
  }
  li {
    display: inline-block;
    margin: 5px 10px;
  }
  a {
    color:blueviolet;
  }  
  table {
    align-content: center;
    max-width: 100%;
    max-height: 100%;
  }
</style>

