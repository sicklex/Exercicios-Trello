using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex7.Entities
{
    public class Veterinario
    {

        public void Examinar(Animal animal)
        {
            Console.WriteLine(animal.Som);
        }
    }
}
