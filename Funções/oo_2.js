class Produto {

  constructor(nome, preco, desc = 0.5) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
  }

  get nome() {
    return `Produto: ${this._nome}`
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase()
  }

  get preco() {
    return this._preco
  }
  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco
    }
  }

  get precoFinal() {
    return this.preco * (1 - this.desc)
  }
}

const p1 = new Produto("Caneta", 8.59)
// p1.nome = "caneta"

console.log(p1.nome)

const p2 = new Produto("Caderno", 27.31, 0.7)
console.log(p2.preco)
console.log(p2.precoFinal.toFixed(2))