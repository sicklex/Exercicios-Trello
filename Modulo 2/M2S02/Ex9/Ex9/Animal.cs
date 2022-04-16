namespace Ex9
{
    public class Animal
    {
        public string Nome { get; set; }
        public string Tipo { get; set; }

        public static List<String> ListaAnimal = new List<String> { "Peixe", "Cachorro", "Gato" };

        public Animal(string nome, string tipo)
        {
            Nome = nome;
            Tipo = tipo;
            ListaAnimal = ListaAnimal;
        }



        public static void TipoAnimal(string Tipo)
        {
          foreach(var animal in ListaAnimal)
            {
              if(animal == Tipo)
                {
                    Console.WriteLine("Mesmo tipo");
                }
            }
        }

        public static void QuantidadeCachorro()
        {
            var test = ListaAnimal.Where(animal => animal == "Cachorro").Count();
            Console.WriteLine($"Existem {test} cachorros na lista");
        }

    }
}
