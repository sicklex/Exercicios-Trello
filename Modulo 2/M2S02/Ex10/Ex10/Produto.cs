namespace Ex10
{
    public class Produto
    {
        public string Nome { get; set; }
        public decimal Valor { get; set; }
        public decimal Porcentagem { get; set; }

        public Produto(string nome, decimal valor, decimal porcentagem)
        {
            Nome = nome;
            Valor = valor;
            Porcentagem = porcentagem;
        }

        public decimal ValorDoDesconto()
        {
            return Valor * (Porcentagem / 100);
        }

        public decimal ValorFinal(Produto produto)
        {
            return produto.Valor - ValorDoDesconto();
        }



    }
}