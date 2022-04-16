// See https://aka.ms/new-console-template for more information
using ClassLibrary1;

Console.WriteLine("Digite o valor da altura");
var altura = int.Parse(Console.ReadLine());
Console.WriteLine("Digite o valor da base");
var @base = int.Parse(Console.ReadLine());




var retangulo = new FormaGeometrica(@base, altura);

retangulo.Propriedades();

