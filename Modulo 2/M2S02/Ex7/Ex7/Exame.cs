namespace Ex7
{
    public class Exame
    {
        public string Nome { get; set; }
        public double Nota { get; set; }    

        public static List<Exame> exames = new List<Exame>();
        public Exame(string nome, double nota)
        {
            Nome = nome;
            Nota = nota;

            exames.Add(this);
        }

       public  static void MaiorNota()
        {
            var MaiorNota = exames.Max(x => x.Nota);
            var nomeDoAluno = exames.FirstOrDefault(aluno => aluno.Nota == MaiorNota);
            Console.WriteLine($"A maior nota foi {MaiorNota} e o aluno que a tirou foi {nomeDoAluno.Nome}");
        }


        public static void MenorNota()
        {
            var MenorNota = exames.Min(x => x.Nota);
            var nomeDoAluno = exames.FirstOrDefault(aluno => aluno.Nota == MenorNota);
            Console.WriteLine($"A maior nota foi {MenorNota} e o aluno que a tirou foi {nomeDoAluno.Nome}");
        }

      public  static void Media()
        {
            double total = 0;
            foreach (var nota in exames)
            {
                total += nota.Nota;
            }
            Console.WriteLine($"A media de nota da turma foi: {total / exames.Count}");
        }

        public static void Reprovados()
        {
            var contador = 0;
          foreach(var nota in exames)
            {
                if(nota.Nota < 6)
                    contador++;
            }
                Console.WriteLine($"A quantidade de alunos que reprovaram foi {contador}");
            }

        }

    }
