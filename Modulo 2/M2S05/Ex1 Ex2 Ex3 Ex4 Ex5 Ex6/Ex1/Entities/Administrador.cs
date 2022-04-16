using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex1.Entities
{
    public class Administrador : Empregado
    {

        public decimal AjudaDeCusto { get; set; }

        public Administrador(string nome, string endereco, string telefone, int codigoSetor, decimal salarioBase, decimal imposto, decimal ajudaDeCusto) :
            base(nome, endereco, telefone, codigoSetor, salarioBase, imposto) => AjudaDeCusto = ajudaDeCusto;


        public override decimal calcularSalario()
        {
            var salario = base.calcularSalario();
            salario = salario + AjudaDeCusto;
            return salario;
        }
    }
}
