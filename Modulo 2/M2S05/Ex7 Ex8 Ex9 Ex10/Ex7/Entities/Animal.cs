namespace Ex7.Entities
{
    public class Animal
    {
        public string Nome { get; set; }
        public int Idade { get; set; }
        public string Som { get; set; }

        public string Comportamento { get; set; }   

        public Animal(string nome, int idade, string som)
        {
            Nome = nome;
            Idade = idade;
            Som = som;
     
        }
    }
}