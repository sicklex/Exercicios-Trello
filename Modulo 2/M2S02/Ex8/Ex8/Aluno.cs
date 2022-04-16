using System.Linq;

namespace Ex8
{
    public class Aluno
    {
        public string Nome { get; set; }
        public int Turma { get; set; }

        public int[] alunosLista { get; set; }
        
        public Aluno(string nome, int turma)
        {
            Nome = nome;
            Turma = turma;
            alunosLista = new int[turma];
        }

        public static int[] Ordena(string tipoOrdenacao,int[] vetor)
        {
            if(tipoOrdenacao == "asc")
            {
               int p = 0;
                int aux;
                while(p < vetor.Length - 1)
                {
                    if (vetor[p] > vetor[p + 1])
                    {
                        aux = vetor[p];
                        vetor[p] = vetor[p + 1];
                        vetor[p+1] = aux;
                        if (p > 0)
                            p -= 2;
                    }
                    p++;
                }
                return vetor;
            }
            if(tipoOrdenacao == "desc")
            {
             
            }
            return (int[])vetor.Reverse();
        }
    }
}