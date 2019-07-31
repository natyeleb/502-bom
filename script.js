//function sairPagina(event){
  // console.log(`Eixo X: ${event.pageX} e Eixo Y ${event.pageY}`);
//}
//window.onclick = sairPagina;

//function sairPagina(event){
  // if(event.pageX >= 0 && event.pageY <=100){
    //alert("NAO SAIA DA PAGINA POR FAVOR")//

    //}else{}
//}

//window.onmousemove = sairPagina;

    
//localStorage.setItem();

let caixaTexto = document.querySelector("input");
let botao  = document.querySelector("button");
let div = document.querySelector("div");
let section = document.querySelector("section");
let h2 = document.querySelector("h2");
let a =  document.querySelector("a");

if(localStorage.nome){
  div.style.display = "none";
  section.style.display = "initial";
  h2.innerHTML = `SEJA BEM VINDO ${localStorage.nome}`
  a.innerHTML = `VOCE NÃO É ${localStorage.nome} ?`;
}else{
    function colocarNome(){
        div.style.display = "initial";
        localStorage.setItem("nome",caixaTexto.value);
       if(localStorage.nome){
        div.style.display = "none";
        section.style.display = "initial";
        h2.innerHTML = `SEJA BEM VINDO  ${localStorage.nome}`;
        a.innerHTML = `VOCÊ NÃO É ${localStorage.nome}? `;

    }
  }

}
function resetar(){
    localStorage.removeItem("nome");

}
a.onclick = resetar
botao.onclick = colocarNome;
