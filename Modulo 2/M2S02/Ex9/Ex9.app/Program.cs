// See https://aka.ms/new-console-template for more information

using Ex9;

var option = 0;

while (option != 2)
{
    Console.WriteLine("Digite o nome do animal");
    var nome = Console.ReadLine();
    Console.WriteLine("Digite o tipo do animal");
    var tipo = Console.ReadLine();

    new Animal(nome, tipo);

    Console.WriteLine("Deseja continuar [1] Sim [2] nao");
    option = int.Parse(Console.ReadLine());
}

Animal.TipoAnimal("Cachorro");