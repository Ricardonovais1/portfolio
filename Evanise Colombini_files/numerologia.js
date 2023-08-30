const app = Vue.createApp({
  data() {
    return {
      letras: {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
        j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
        s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
      },
      vogais: ['a', 'e', 'i', 'o', 'u'],
      nomeCompleto: '',
      dataNascimento: '',
      nAlma: 0,
      nPersonalidade: 0,
      nMissaoDeVida: 0,
      nCaminhoDeVida: 0,
      nMaturidade: 0,
      resultadoVisivel: false,
      descrAlma: '',
      descrPersonalidade: '',
      descrMissaoDeVida: '',
      descrCaminhoDeVida: '',
      descrMaturidade: '',
      dAlma: {
          1: 'Texto alma 1',
          2: 'Texto alma 2',
          3: 'Texto alma 3',
          4: 'Texto alma 4',
          5: 'Texto alma 5',
          6: 'Texto alma 6',
          7: 'Texto alma 7',
          8: 'Texto alma 8',
          9: 'Texto alma 9'
      },
      dPersonalidade: {
          1: 'Texto personalidade 1',
          2: 'Texto personalidade 2',
          3: 'Texto personalidade 3',
          4: 'Texto personalidade 4',
          5: 'Texto personalidade 5',
          6: 'Texto personalidade 6',
          7: 'Texto personalidade 7',
          8: 'Texto personalidade 8',
          9: 'Texto personalidade 9'
        },
      dMissaoDeVida: {
          1: 'Texto missao de vida 1',
          2: 'Texto missao de vida 2',
          3: 'Texto missao de vida 3',
          4: 'Texto missao de vida 4',
          5: 'Texto missao de vida 5',
          6: 'Texto missao de vida 6',
          7: 'Texto missao de vida 7',
          8: 'Texto missao de vida 8',
          9: 'Texto missao de vida 9'
        },
      dCaminhoDeVida: {
          1: 'Texto caminho de vida 1',
          2: 'Texto caminho de vida 2',
          3: 'Texto caminho de vida 3',
          4: 'Texto caminho de vida 4',
          5: 'Texto caminho de vida 5',
          6: 'Texto caminho de vida 6',
          7: 'Texto caminho de vida 7',
          8: 'Texto caminho de vida 8',
          9: 'Texto caminho de vida 9'
      },
      dMaturidade: {
          1: 'Texto maturidade 1',
          2: 'Texto maturidade 2',
          3: 'Texto maturidade 3',
          4: 'Texto maturidade 4',
          5: 'Texto maturidade 5',
          6: 'Texto maturidade 6',
          7: 'Texto maturidade 7',
          8: 'Texto maturidade 8',
          9: 'Texto maturidade 9'
      }
    }
  },
  methods: {
    somaDigitos(numero) {
      while (numero > 9) {
        let soma = 0;
        while (numero > 0) {
          soma += numero % 10;
          numero = Math.floor(numero / 10);
        }
        numero = soma;
      }
      return numero;
    },
    numeroDaAlma(nome) {
      let somaVogais = nome.replace(/\s/g, "")
                           .split('')
                           .map(char => char.toLowerCase())
                           .filter(char => this.vogais.includes(char))
                           .map(char => this.letras[char])
                           .reduce((a, b) => a + b)
      this.nAlma = this.somaDigitos(somaVogais)
      return this.nAlma
    },
    descricaoNumAlma() {
      this.descrAlma = this.dAlma[this.nAlma]
      return this.descrAlma
    },
    numeroDaPersonalidade(nome) {
      const somaConsoantes = nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                                 .replace(/[\s.,:'";\/?!]/g, "")
                                 .split('')
                                 .map(char => char.toLowerCase())
                                 .filter(char => !this.vogais.includes(char))
                                 .map(char => this.letras[char])
                                 .reduce((a, b) => a + b)
      this.nPersonalidade = this.somaDigitos(somaConsoantes)
      return this.nPersonalidade
    },
    descricaoNumPersonalidade() {
      this.descrPersonalidade = this.dPersonalidade[this.nPersonalidade]
      return this.descrPersonalidade
    },
    numeroMissaoDeVida(nome) {
      this.nMissaoDeVida = this.somaDigitos(this.numeroDaAlma(nome) + this.numeroDaPersonalidade(nome))
      return this.nMissaoDeVida

    },
    descricaoNumMissaoDeVida() {
      this.descrMissaoDeVida = this.dMissaoDeVida[this.nMissaoDeVida]
      return this.descrMissaoDeVida
    },
    numeroCaminhoDeVida(dataNascimento) {
      const somaDataNascimento = dataNascimento.replace(/\//g, "")
                                               .split('')
                                               .map(num => +num)
                                               .reduce((a, b) => a + b)
      this.nCaminhoDeVida = this.somaDigitos(somaDataNascimento)
      return this.nCaminhoDeVida
    },
    descricaoNumCaminhoDeVida() {
      this.descrCaminhoDeVida = this.dCaminhoDeVida[this.nCaminhoDeVida]
      return this.descrCaminhoDeVida
    },
    numeroMaturidade(nome, dataNascimento) {
      this.nMaturidade = this.somaDigitos(this.numeroMissaoDeVida(nome) + this.numeroCaminhoDeVida(dataNascimento))
      return this.nMaturidade
    },
    descricaoNumMaturidade() {
      this.descrMaturidade = this.dMaturidade[this.nMaturidade]
      return this.descrMaturidade
    },
    fazerCalculos() {
      this.numeroDaAlma(this.nomeCompleto)
      this.descricaoNumAlma()

      this.numeroDaPersonalidade(this.nomeCompleto)
      this.descricaoNumPersonalidade()

      this.numeroMissaoDeVida(this.nomeCompleto)
      this.descricaoNumMissaoDeVida()

      this.numeroCaminhoDeVida(this.dataNascimento)
      this.descricaoNumCaminhoDeVida()

      this.numeroMaturidade(this.nomeCompleto, this.dataNascimento)
      this.descricaoNumMaturidade()

      return this.resultadoVisivel = !this.resultadoVisivel
    }
  }
})

app.mount('#app')