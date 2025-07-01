function pesquisarPessoaPorCPF(cpf) {
    const pessoas = [
        {
            nome: 'jessica',
            cpf: '40898249821',
            frutasFavoritas: [ 'morango', "banana"],
        },
        {
            nome: 'katy',
            cpf: '12345678911',
            frutasFavoritas: ['banana', 'maçã'],
        },
        {
            nome: 'deuza',
            cpf: '17622070874',
            frutasFavoritas: ['mamão', 'abacaxi'],
        },
        {
            nome: 'harvey',
            cpf: '98765432111',
            frutasFavoritas: ['banana', 'maçã'],
        },
        {
            nome: 'juma',
            cpf: '11223344556',
            frutasFavoritas: ['maçã', 'pêra'],
        },
        {
            nome: 'donna',
            cpf: '77889911223',
            frutasFavoritas: ['pêra', 'banana'],
        }
    ];

    for (let indice = 0; indice < pessoas.length; indice++) {
        if (cpf == pessoas[indice].cpf) {
            return pessoas[indice]
        }
    }

  return 'CPF não encontrado'
}

module.exports = {
    pesquisarPessoaPorCPF
}