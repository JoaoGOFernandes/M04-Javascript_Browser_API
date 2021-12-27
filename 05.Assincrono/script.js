const alerta = document.querySelector("#alerta")
const tabelaUsuarios = document.querySelector("#tabela-usuarios")
const botaoCarregar = document.querySelector("#botao-carregar")

botaoCarregar.addEventListener('click', () => carregarDadosClickBotao())

const novaLinha = ({id, name, email, company}) =>                     //Desestruturando o parametro passado para acessar só as propriedades necessarias
    `
        <tr id="${id}">
            <td>${name}</td>
            <td>${email}</td>
            <td>${company.name}</td>  
        </tr>
    `                                         //Como company é um objeto, pegamos só o nome da companhia


const preencherTabela = (usuarios) => {
    if(!usuarios){
        alerta.textContent = "Não existem registros a serem exibidos"
    }else{
        const listaDeUsuariosHTML = usuarios
            .map(usuariosEl => novaLinha(usuariosEl))
            .join('')
        tabelaUsuarios.innerHTML = listaDeUsuariosHTML
        alerta.textContent = `Foram carregados ${usuarios.length} registros`
    }
    
}

const DADOS_USUARIOS = [
    { id: 1, name: "Amanda", email: "amanda@lovemail.com", company: { name: 'Lets Code'}},
    { id: 2, name: "Igor", email: "igor@bol.com", company: { name: 'Santander'}},
    { id: 3, name: "Mar cos", email: "marcos1234@outlook.com", company: { name: 'Microsoft'}},
    { id: 4, name: "Lucas", email: "lucasflores@hotmail.com", company: { name: 'Google'}},
];

const buscarUsuarioNoBancoDeDados = () => {             //Simula uma resquisição que no caso busca os dados dos usuarios que esta no array acima(Dados locais
    return new Promise((resolve, reject) => {
        setTimeout(() => {                              //Operação assincrona que espera 5s para ser executada
            if(!DADOS_USUARIOS){
                reject("Não existem usuarios para serem retornandos")
            }
            resolve(DADOS_USUARIOS)
        },5 * 1000)
    })
}

const buscarUsuarioNoBancoDeDadosFetchApi = () => {                  //Retorna uma array de 10 usuarios com os dados consumidos da API
    return fetch('http://jsonplaceholder.typicode.com/users')
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(erro => erro)
}

const carregarDadosClickBotao = () => {
    Promise
        .all([buscarUsuarioNoBancoDeDados(), buscarUsuarioNoBancoDeDadosFetchApi()])                                    //Resolver todas as promisses
        .then(values => {
            // console.log(values); //Os dessa forma temos uma array com dois arrays(cada array de uma requisição)
            const usuarios = [...values[0],...values[1]]
            preencherTabela(usuarios)
            adicionarArrayAoStorage('usuarios', JSON.stringify(usuarios))
        })
}

const rofaAutomaticamenteAoinicializar = () => {
    preencherTabela(buscarDadosDosStorage('usuarios'))
    
}