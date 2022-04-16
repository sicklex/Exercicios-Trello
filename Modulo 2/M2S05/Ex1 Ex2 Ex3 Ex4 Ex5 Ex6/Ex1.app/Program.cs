
using Ex1.Entities;

var fornecedor = new Fornecedor("Claydson", "r6", "21986748431", 1000, 100);
Console.WriteLine(fornecedor.obterSaldo());

var joao = new Empregado("Joao", "R7", "21986748431", 241, 2000, 10);

joao.calcularSalario();

var paulo = new Administrador("Paulo", "R7", "21986748431", 241, 2000, 10, 500);

paulo.calcularSalario();

var fernando = new Operario("fernando", "r8", "21966748441", 241, 1000, 10, 5000, 10);

Console.WriteLine($"Salario do fernando e {fernando.calcularSalario()}");

var rafael = new Operario("rafael", "r9", "21966748441", 241, 1000, 10, 80000, 1);

Console.WriteLine($"Salario do rafael e {rafael.calcularSalario()}");