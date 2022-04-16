using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex7.Entities
{
    public class Cavalo : Animal
    {
        public Cavalo(string nome, int idade, string som, string comportamento) : base(nome, idade, som, comportamento)
        {
        }
    }
}
