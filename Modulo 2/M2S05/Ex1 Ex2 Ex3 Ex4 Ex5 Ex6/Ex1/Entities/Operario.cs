using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex1.Entities
{
    public class Operario : Empregado
    {
        public decimal ValorProducao { get; set; }
        public decimal Comissao { get; set; }

        public Operario(string nome, string endereco, string telefone, int codigoSetor, decimal salarioBase, decimal imposto, decimal valorProducao, decimal comissao) : base(nome, endereco, telefone, codigoSetor, salarioBase, imposto)
        {
            ValorProducao = valorProducao;
            Comissao = comissao;
        }

        public override decimal calcularSalario()
        {
           var salario = base.calcularSalario();
            salario = ValorProducao * (Comissao / 100) + salario;
            return salario;
        }
    }
}
