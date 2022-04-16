// See https://aka.ms/new-console-template for more information

using Ex7;

Console.WriteLine("Digite a quantidade de alunos da sala");
var QntAlunos = int.Parse(Console.ReadLine());
var contador = 0;

while (QntAlunos != contador)
{
    Console.WriteLine("Digite o nome do aluno");
    var nome = Console.ReadLine();
    Console.WriteLine("Digite a nota do aluno");
    var nota = double.Parse(Console.ReadLine());
    new Exame(nome, nota);
    contador++;
}

Exame.MaiorNota();
Exame.MenorNota();
Exame.Media();
Exame.Reprovados();