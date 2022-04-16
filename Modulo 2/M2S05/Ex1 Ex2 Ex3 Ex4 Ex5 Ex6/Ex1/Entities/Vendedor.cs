using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex1.Entities
{
    public class Vendedor : Empregado
    {

        public decimal ValorVendas { get; set; }
        public decimal Comissao { get; set; }

        public Vendedor(string nome, string endereco, string telefone, int codigoSetor, decimal salarioBase, decimal imposto, decimal valorVendas, decimal comissao) :
            base(nome, endereco, telefone, codigoSetor, salarioBase, imposto)
        {
            ValorVendas = valorVendas;
            Comissao = comissao;
         }

        public override decimal calcularSalario()
        {
          var salario =  base.calcularSalario();
            salario = ValorVendas * (Comissao / 100) + salario;
            return salario;
        }
    }
}
