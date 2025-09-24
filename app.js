// Array para armazenar os nomes dos amigos
let amigos = [];

// Adiciona um novo amigo à lista, essa função é chamada pelo botão "Adicionar"
function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value;

    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome.');
        amigoInput.focus();
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    amigoInput.value = '';

    // Exibir a lista atualizada
    exibirListaDeAmigos();
}

// Exibe a lista de amigos na interface. Limpa a lista existente e recria com os nomes do array 'amigos'.
function exibirListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Sorteia um amigo da lista e exibe o resultado. Esta função é chamada pelo botão "Sortear amigo".
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para poder sortear!');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>O amigo secreto sorteado é:</p>
        <p class="drawn-name">${amigoSorteado}</p>
    `;
}