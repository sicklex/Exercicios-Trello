using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex6.Entities
{
    public class ItensPedido
    {
        public string NomeDoItem { get; set; }
        public double ValorDoItem { get; set; }

        public ItensPedido(string nomeDoItem, double valorDoItem)
        {
            NomeDoItem = nomeDoItem;
            ValorDoItem = valorDoItem;
        }
    }
}
