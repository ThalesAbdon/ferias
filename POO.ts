class Carro {
  // Atributos da classe Carro
  private modelo: string;
  private nome: string;
  private ano: number;

  // Construtor da classe Carro
  constructor(modelo: string, nome: string, ano: number) {
    this.modelo = modelo;
    this.nome = nome;
    this.ano = ano;
  }

  // Métodos da classe

  //Getters
  getModelo(): string {
    return this.modelo;
  }

  getNome(): string {
    return this.nome;
  }

  getAno(): number {
    return this.ano;
  }

  //Setters
  setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  setAno(ano: number): void {
    this.ano = ano;
  }

  ligar(): void {
    console.log(`${this.modelo} ${this.nome} está ligado.`);
  }

  desligar(): void {
    console.log(`${this.modelo} ${this.nome} está desligado.`);
  }
}

// Classe derivada CarroEsportivo que herda de Carro
class CarroEsportivo extends Carro {
  // Método adicional específico para CarroEsportivo
  acelerar(): void {
    console.log(`${this.getModelo()} ${this.getNome()} está acelerando!`);
  }
}

// Função que aceita qualquer objeto da classe Carro (polimorfismo)
function apresentarCarro(carro: Carro): void {
  carro.ligar();

  // Verifica se o objeto é uma instância de CarroEsportivo
  if (carro instanceof CarroEsportivo) {
    carro.acelerar();
  }
}

// Exemplo de criação de objetos a partir da classe Carro
const carro1 = new Carro("Fiat", "uno", 2019);
const carro2 = new Carro("Chevrolet", "Onix", 2023);
const carro3 = new CarroEsportivo("Chevrolet", "Camaro", 2023);

// Modificando atributos usando métodos setters
carro1.setModelo("Volkswagen");
carro1.setNome("Gol");
carro1.setAno(2020);

// Chamando a função apresentarCarro com objetos de diferentes classes
apresentarCarro(carro1); // Saída: Volkswagen Gol está ligado.
apresentarCarro(carro3); // Saída: Chevrolet Camaro está ligado. Camaro está acelerando!

// Acessando e modificando atributos com os métodos getters e setters
console.log(carro1.getModelo()); // Saída: Volkswagen
console.log(carro1.getNome()); // Saída: Gol
console.log(carro1.getAno()); // Saída: 2020
carro1.ligar();

console.log(carro2.getModelo()); // Saída: Chevrolet
console.log(carro2.getNome()); // Saída: Onix
console.log(carro2.getAno()); // Saída: 2023
carro2.desligar();
