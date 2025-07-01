const { pesquisarPessoaPorCPF } = require('../src/pesquisar.js')
const { strictEqual } = require('node:assert')

describe('Pesquisar', function () {
    it('Ao informar o CPF da Jessica teremos o seu nome, cpf e frutas favoritas', function () {
        //Arrange
        const cpfPesquisado = '40898249821'
        const nomeEsperado = 'jessica'
        const cpfEsperado = '40898249821'
        const primeiraFrutaEsperada = 'morango'
        const segundaFrutaEsperada = 'banana'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })

    it('Ao informar um CPF que não existe, deve retornar CPF não encontrado', function () {
        // Arrange
        const cpfPesquisado = '000000000'
        const mensagemEsperada = 'CPF não encontrado'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert
        strictEqual(pessoa, mensagemEsperada)
    })

    it('Ao informar o CPF da Deuza teremos o seu nome, cpf e frutas favoritas', function () {
        //Arrange
        const cpfPesquisado = '17622070874'
        const nomeEsperado = 'deuza'
        const cpfEsperado = '17622070874'
        const primeiraFrutaEsperada = 'mamão'
        const segundaFrutaEsperada = 'abacaxi'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })

    it('Ao informar o CPF da Juma teremos o seu nome, cpf e frutas favoritas', function () {
        //Arrange
        const cpfPesquisado = '11223344556'
        const nomeEsperado = 'juma'
        const cpfEsperado = '11223344556'
        const primeiraFrutaEsperada = 'maçã'
        const segundaFrutaEsperada = 'pêra'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })
    
    it('Ao informar o CPF da Katy teremos o seu nome, cpf e frutas favoritas', function () {
        //Arrange
        const cpfPesquisado = '12345678911'
        const nomeEsperado = 'katy'
        const cpfEsperado = '12345678911'
        const primeiraFrutaEsperada = 'banana'
        const segundaFrutaEsperada = 'maçã'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })

    it('Ao informar o CPF do Harvey teremos o seu nome, cpf e frutas favoritas', function () {
        //Arrange
        const cpfPesquisado = '98765432111'
        const nomeEsperado = 'harvey'
        const cpfEsperado = '98765432111'
        const primeiraFrutaEsperada = 'banana'
        const segundaFrutaEsperada = 'maçã'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })

    it('Ao informar o CPF da Donna teremos o seu nome, cpf e frutas favoritas', function () {
        //Arrange
        const cpfPesquisado = '77889911223'
        const nomeEsperado = 'donna'
        const cpfEsperado = '77889911223'
        const primeiraFrutaEsperada = 'pêra'
        const segundaFrutaEsperada = 'banana'

        // Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
    })
})
    