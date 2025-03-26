async function buscarEndereco(event) {
    event.preventDefault();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar o endereço.');
        }
        const data = await response.json();
        if (data.erro) {
            alert('CEP não encontrado.');
            return;
        }

        document.getElementById('rua').value = data.logradouro || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('cidade').value = data.localidade || '';
        document.getElementById('cepRetornado').value = data.cep || '';
    } catch (error) {
        alert('Erro ao buscar o endereço. Verifique o CEP e tente novamente.');
    }
}

document.getElementById('formBuscaEndereco').addEventListener('submit', buscarEndereco);