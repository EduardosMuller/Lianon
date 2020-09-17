const path = require("path")
const fs = require("fs")

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho)
      arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
      resolve(arquivos)
    } catch (e) {
      reject(e)
    }
  })
}

function lerUmArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, {
        encoding: "utf-8"
      })
      resolve(conteudo.toString())
    } catch (e) {
      reject(e)
    }
  })
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerUmArquivo(caminho)))
}


function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter(elem => elem.endsWith(padraoTextual))
  }
}

function removerElementosSeVazio(array) {
  return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter(el => !el.includes(padraoTextual))
  }
}

function removerElementosSeApenasNumero(array) {
  return array.filter(el => {
    const num = parseInt(el.trim())
    return num !== num
  })
}

// function removerSeSimbolos(array) {
//   return array.filter(el => )
// }

module.exports = {
  lerDiretorio,
  lerUmArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
}