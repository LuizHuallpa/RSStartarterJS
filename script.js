//Primeiro Exercicio

function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(idade >= 18){
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })
}

   checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    })


//Segundo e terceiro Exercicios

var buttonElement = document.querySelector('#app button')
var inputName = document.getElementById("user");
var dataList = document.querySelector("ul");
const getUserRepo = name => {
  var user = inputName.value;
  if (!user) {
    renderError();
    alert("Preencha o campo");
  }
  renderLoading();
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      fillList(response.data);
    })
    .catch(error => {
      alert("Ocorreu um erro na busca!");
      renderError(error);
    });
};

buttonElement.onclick = getUserRepo
inputName.addEventListener("keyup", function (e) {
  if (e.key == 'Enter') {
    getUserRepo()
  }
})
function renderLoading(loading) {
  dataList.innerHTML = "";
  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");
  loadingElement.appendChild(textElement);
  dataList.appendChild(loadingElement);
}

function renderError(loading) {
  dataList.innerHTML = "";
  var user = inputName.value;
  var msgUserEmpty = !user ? "Preencha o usuário" : "Erro ao efetuar busca";

  var textElement = document.createTextNode(msgUserEmpty);
  var errorElement = document.createElement("li");
  errorElement.style.color = "#F00";
  errorElement.appendChild(textElement);
  dataList.appendChild(errorElement);
}

const fillList = repos => {
  dataList.innerHTML = "";

  for (repo of repos) {
    var repoNome = document.createTextNode(repo.name);
    var repoLista = document.createElement("li");

    repoLista.appendChild(repoNome);
    dataList.appendChild(repoLista);
  }
};
