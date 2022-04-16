// See https://aka.ms/new-console-template for more information


using MaiorIdade;
var contador = 0;


var nome1 = "";
var nome2 = "";
var nome3 = "";
var idade1 = 0;
var idade2 = 0;
var idade3 = 0;

Console.WriteLine("Digite o primeiro nome");
nome1 = Console.ReadLine();
Console.WriteLine($"Digite a idade do {nome1} ");
idade1 = int.Parse(Console.ReadLine());

Console.WriteLine("Digite o segundo nome");
nome2 = Console.ReadLine();
Console.WriteLine($"Digite a idade do {nome2} ");
idade2 = int.Parse(Console.ReadLine());

Console.WriteLine("Digite o terceiro nome");
nome3 = Console.ReadLine();
Console.WriteLine($"Digite a idade do {nome3} ");
idade3 = int.Parse(Console.ReadLine());

var Pessoa1 = new Pessoa(nome1, idade1);
Pessoa1.Pessoas.Add(Pessoa1);

var Pessoa2 = new Pessoa(nome2, idade2);
Pessoa1.Pessoas.Add(Pessoa2);

var Pessoa3 = new Pessoa(nome3, idade3);
Pessoa1.Pessoas.Add(Pessoa3);

Pessoa1.MaiorIdade();





