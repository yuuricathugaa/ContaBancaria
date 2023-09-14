class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(novoSaldo) {
    this._saldo = novoSaldo;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado com sucesso.`);
    } else {
      console.log('Saldo insuficiente para realizar o saque.');
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
    } else {
      console.log('O valor do depósito deve ser maior que zero.');
    }
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito, saldo = 0) {
    super(agencia, numero, 'Conta Corrente', saldo);
    this.cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(novoCartaoCredito) {
    this._cartaoCredito = novoCartaoCredito;
  }

}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo = 0) {
    super(agencia, numero, 'Conta Poupança', saldo);
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo = 0) {
    super(agencia, numero, 'Conta Universitária', saldo);
  }

  sacar(valor) {
    if (valor > 0 && valor <= 500 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado com sucesso.`);
    } else {
      console.log('Valor de saque não permitido para Conta Universitária.');
    }
  }
}

const agencia = prompt('Digite o número da agência:');
const numero = prompt('Digite o número da conta:');
const cartaoCredito = prompt('Digite o limite do cartão de crédito para Conta Corrente:');
const saldoInicial = prompt('Digite o saldo inicial da conta:');

const contaCorrente = new ContaCorrente(agencia, numero, cartaoCredito, parseFloat(saldoInicial));
console.log(`Saldo da Conta Corrente: R$ ${contaCorrente.saldo}`);
contaCorrente.sacar(100);
console.log(`Saldo da Conta Corrente: R$ ${contaCorrente.saldo}`);

const contaPoupanca = new ContaPoupanca(agencia, numero, parseFloat(saldoInicial));
console.log(`Saldo da Conta Poupança: R$ ${contaPoupanca.saldo}`);
contaPoupanca.depositar(500);
console.log(`Saldo da Conta Poupança: R$ ${contaPoupanca.saldo}`);


const contaUniversitaria = new ContaUniversitaria(agencia, numero, parseFloat(saldoInicial));
console.log(`Saldo da Conta Universitária: R$ ${contaUniversitaria.saldo}`);
const valorSaqueUniversitaria = prompt('Digite o valor do saque para Conta Universitária:');
contaUniversitaria.sacar(parseFloat(valorSaqueUniversitaria));
console.log(`Saldo da Conta Universitária: R$ ${contaUniversitaria.saldo}`);
