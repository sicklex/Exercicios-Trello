using System.Collections;

namespace ClassLibrary1
{
    public class FormaGeometrica
    {
        public double Base { get; set; }
        public double Altura { get; set; }

        public double Area { get; set; }

        public FormaGeometrica(double @base, double altura)
        {
            Base = @base;
            Altura = altura;
        }

        public void Propriedades()
        {
            Area = Base * Altura;

            Console.WriteLine($"A altura {Altura}");
            Console.WriteLine($"A base {Base}");
            Console.WriteLine($"A area {Area}");
        }
    }
}