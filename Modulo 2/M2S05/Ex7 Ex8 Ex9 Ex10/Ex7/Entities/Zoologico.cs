using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex7.Entities
{
    public class Zoologico
    {
        public List<Animal> Jaulas = new List<Animal>();

        public void AnimalNaJaula()
        {
            foreach(var animal in Jaulas)
            {
                Console.WriteLine(animal.Som);
                if(animal.Comportamento == "Correr")
                    Console.WriteLine(animal.Comportamento);
            }
        }
    }
}
