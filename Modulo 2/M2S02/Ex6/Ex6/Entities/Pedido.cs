using Ex6.Entities;

namespace Ex6
{
    public class Pedido
    {
        public DateTime DataDoPedido { get; set; }

        public List<ItensPedido> ItensPedidos { get; set; }

        public Pedido(DateTime dataDoPedido, List<ItensPedido> itensPedidos)
        {
            DataDoPedido = dataDoPedido;
            ItensPedidos = itensPedidos;
        }
        public void QntItensPedidos()  => Console.WriteLine($"A quantidade de itens pedidos foram: {ItensPedidos.Count}");

        public void ValorTotal()
        {
            double total = 0; 
            foreach(var itens in ItensPedidos)
            {
                total += itens.ValorDoItem;
            }
        }
    }
}