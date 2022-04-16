namespace Ex1
{
    public class Pessoa
    {
        public string Nome { get; private set; }
        public string Endereco { get; private set; }
        public string Telefone { get; private set; }

        public Pessoa(string nome, string endereco, string telefone)
        {
            Nome = nome;
            Endereco = endereco;
            Telefone = telefone;
        }
        public Pessoa(string nome, string endereco)
        {
            Nome = nome;
            Endereco = endereco;
        }
        public Pessoa(string nome)
        {
            Nome = nome;
        }
    }
}