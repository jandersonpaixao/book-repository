function criarTabela(event) {
  event.preventDefault();

    let recebeTitulo = document.getElementById('titulo').value;
    let recebeAutor = document.getElementById('autor').value;
    let recebeIsbn = document.getElementById('isbn').value;
    let recebeData = document.getElementById('data').value;
    let recebePaginas = document.getElementById('paginas').value;
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');
    let dataInsercao = new Date().toLocaleDateString('pt-br');

    if (recebeTitulo === "" || recebeAutor ==="" || recebeIsbn === "" || recebeData === "" || recebePaginas === ""){
      alert("Preencha todos os campos")
    } else{

      
      document.getElementById('dadosTabela').innerHTML += `
      <tr id="tr-tabela">
      <td>${recebeTitulo}</td>
      <td>${recebeAutor}</td>
      <td>${recebeIsbn}</td>
      <td>${recebeData}</td>
      <td>${recebePaginas}</td>
      <td>${horarioInsercao} - ${dataInsercao}</td>
      <td><button id='botao-tabela' class='botao-tabela' onclick="removerLivroTabela(event)" ></button></td>
      </tr>
      
      
      `
      
    }

}
function removerLivroTabela(event){
  document.getElementById("tr-tabela").remove();
}