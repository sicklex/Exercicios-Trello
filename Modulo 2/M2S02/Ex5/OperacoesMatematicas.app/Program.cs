// See https://aka.ms/new-console-template for more information

using OperacoesMatematicas;

var calculadora = new Calculadora();


Console.WriteLine("Digite o primeiro numero");
calculadora.Valor1 = decimal.Parse(Console.ReadLine());
Console.WriteLine("Digite o operador");
calculadora.Operador = Console.ReadLine();
Console.WriteLine("Digite o segundo numero");
calculadora.Valor2 = decimal.Parse(Console.ReadLine());



calculadora.Calcular();
