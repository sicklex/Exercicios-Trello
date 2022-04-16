using Ex7;
using Ex7.Entities;

/*var animal = new Animal("Ronaldo", 28, "Au au","Correr");
*/
/*Console.WriteLine(animal.Som);*/

var cachorro = new Cachorro("Bruto", 5, "Au au", "Correr");
var Cavalo = new Cavalo("Branco", 7, "relincha", "Correr");
var Preguica = new Preguica("Preguica", 3, "nao sei", "sobe arvore");

var veterinario = new Veterinario();

/*veterinario.Examinar(cachorro);
veterinario.Examinar(Cavalo);
veterinario.Examinar(Preguica);*/

var zoologico = new Zoologico();

zoologico.Jaulas.Add(cachorro);
zoologico.Jaulas.Add(Cavalo);
zoologico.Jaulas.Add(Preguica);

zoologico.AnimalNaJaula();


