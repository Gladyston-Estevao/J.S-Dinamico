document.getElementById('animeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const genero0 = document.getElementById('genero0').value;
    const alancamento = document.getElementById('alancamento').value;
    const nota = document.getElementById('nota').value;

    // Cria uma nova linha na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${genero0}</td>
        <td>${alancamento}</td>
        <td>${nota}</td>
    `;

    // Adiciona a nova linha ao corpo da tabela
    document.querySelector('#tabelaAnime tbody').appendChild(newRow);

    // Limpa os campos do formulário
    document.getElementById('animeForm').reset();
});
