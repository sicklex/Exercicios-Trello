using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex1.Entities
{
    public class Fornecedor : Pessoa
    {

        public int ValorCredito { get; set; }
        public int ValorDivida { get; set; }
        public Fornecedor(string nome, string endereco, string telefone, int valorCredito, int valorDivida) : 
            base(nome, endereco, telefone)
        {
            ValorCredito = valorCredito;
            ValorDivida = valorDivida;
        }

        public string obterSaldo()
        {
            return $"Seu saldo e {ValorCredito - ValorDivida}";
        }

    }
}
