using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex1.Entities
{
    public class Empregado : Pessoa
    {
        public int CodigoSetor { get; set; }
        public decimal SalarioBase { get; set; }
        public decimal Imposto { get; set; }

        public Empregado(string nome, string endereco, string telefone, int codigoSetor, decimal salarioBase, decimal imposto) 
            : base(nome, endereco, telefone)
        {
            CodigoSetor = codigoSetor;
            SalarioBase = salarioBase;
            Imposto = imposto;
         }

        public virtual decimal calcularSalario()
        {
            var salario = SalarioBase - (Imposto / 100 * SalarioBase);
            return salario;
        }
    }
}
