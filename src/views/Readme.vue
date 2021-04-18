<template>

<div class="explain">

    <h2>Tarefa 2.2 alínea b)</h2>
    <h3>Pototipagem Wireframe</h3>
    <h4>(O código de cores serve para ilustrar o mapeamento Wireframe à estrura Vue)</h4>
    <img src="@\assets\WireFrame.png" alt="Wireframe vs Estrura Vue">

    <hr>
    <h2>Estrutura do código, componentes e assets</h2>

    <table class="cerne">
        <tr>
            <th>App.vue</th>
            <th>router/index.js</th>
            <th>public/index.html</th>
        </tr>
        <tr>
            <td>
                <p>App.vue com a navegação, a reserva para o router colocar as componentes e o footer</p>
                <img src="@\assets\AppVue.png" alt="App.vue"><br></td>
            <td>
                <p>No router é visivel que a Home page é a página "Quem sou eu"</p>
                <img src="@\assets\router_indexjs.png" alt="router | index.js" ><br></td>
            <td>
                <p>O ficheiro index.html contem o objeto DOM a ser gerido pelo Vue</p>
                <img src="@\assets\indexhtml.png" alt="index.html"><br></td>
        </tr>
    </table>

    <h4>(Redes sociais de "Portugal" e aonte das imagens: https://thisXXXdoesnotexist.com/" onde XXX=artwork, chemical ou person)</h4>    
    <table class="conteudo">
        <tr>
            <th>componentes</th>
            <th>views</th>
            <th>assets</th>
        </tr>
        <tr>
            <td>
                <p>Neste contexto não era necessário fazer componentes mas obtou-se por fazê-lo para 
                    exercitar a utilização de props </p>
                <img src="@\assets\components.png" alt="componente Home=QuemSouEu"><br></td>
            <td><img src="@\assets\views.png" alt="view Hobbies"><br></td>
            <td><img src="@\assets\assets.png" alt="Assets da Estrura Vue"><br></td>
        </tr>
    </table>

</div>

<div class="miniProj1">
    <hr>
    <h2>Tarefa 2.2: Mini-Projeto: Single Page Application (SPA)</h2>

    <p>A tarefa 2.2 corresponde ao primeiro desenvolvimento web da unidade curricular. Esta programação pretende verificar os conhecimentos anteriores relativos à construção de uma página HTML básica, com o acrescido do conceitos de Single Page Application (SPA).</p>
    <p>Uma SPA é uma aplicação ou um site Web incluso numa única página com o objetivo de fornecer uma experiência semelhante à de uma aplicação nativa (ou desktop). No modelo SPA, todos os recursos (por exemplo, HTML, Javascript e CSS) são inicialmente carregados, ficando agregados num único ficheiro.</p>
    <p>A navegabilidade da página é feita através de links interno que direcionam o utilizador para outras seções da página ou janelas modais.</p>
    <p>Com o mini projeto ireis construir uma tem como objetivo aprender e consolidar o conceito SPA. O site a funcionar numa única página corresponderá ao seu currículo vitae, a partir de uma página index.html. O site deve ter a seguinte:</p>
    <ul>
         <li>Quem Sou Eu?</li>
         <li>O que faço?</li>
         <li>Hobbies </li>
    </ul>                
    <p>No rodapé da página index.html, bem como nas restantes páginas criadas, deve surgir o rodapé com a indentidade virtual composta por um conjunto de icones de redes sociais populares (ex. facebook, Google +, Twitter, Linkedin, etc.)</p>
    
    <h3>Fases da tarefa:</h3>
    <ul>
        <li>a) Cada aluno deve ler os recursos partilhados para consolidar os conhecimentos na criação da sites em HTML, e aprender a desenvolver um SPA através da framework Vue.js.</li>
        <li>b) Cada aluno deve apresentar uma prototipagem que simule a aparência e a funcionalidade do produto Web, como documentação do projeto. Neste caso, o tipo de prototipagem a usar é o wireframe, onde deve ser apresentado todas as páginas a desenvolver.</li>
        <li>c) Cada aluno deve desenvolver o ficheiro SPA, usando a framework Vue.js com os requisitos apresentados.</li>
        <li>d) Todos os ficheiros desenvolvidos devem ser submetidos na plataforma Git, onde cada aluno deve criar uma conta individual. O projeto no Git deve-se chamar de mini-proj1. A avaliação do projeto será realizada a partir dos ficheiros existentes no Git.</li>
        <li>e) Deveis contribuir para o debate em geral, comentando e opinando (sustentadamente, tal como nas alíneas anteriores) as intervenções dos colegas, e apoiando os colegas na resolução de dúvidas, usando para o efeito o fórum da tarefa.</li>
    </ul>    

  </div>
</template>

<script>
  export default {
    name: "Readme" 
  }
</script>

<style scooped>
img {max-width:100%}
.explain{
    text-align: center;
    table-layout: auto;
}
.cerne,.conteudo
{    
    margin-left: auto;
    margin-right: auto;
}
table {
    text-align: center;
    align-self: stretch;
    grid-auto-columns: 50%;
    align-content: center;
    max-width: 80%;
    max-height: 100%;
}
.miniProj1{
    border:30px solid white;
    background: white;
    text-align: left;
}
h2{
    text-align: center;
}
</style>