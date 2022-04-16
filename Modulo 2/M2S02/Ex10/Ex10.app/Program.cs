// See https://aka.ms/new-console-template for more information

using Ex10;

var computador = new Produto("Computador", 1000, 10);

Console.WriteLine($"O valor do desconto é {computador.ValorDoDesconto()}");
Console.WriteLine($"Com o desconto aplicado o valor fica {computador.ValorFinal(computador)}");