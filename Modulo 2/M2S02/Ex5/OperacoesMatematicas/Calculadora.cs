namespace OperacoesMatematicas
{
    public class Calculadora
    {

        public decimal Valor1 { get; set; }
        public decimal Valor2 { get; set; }
        public string Operador { get; set; }


        public void Calcular()
        {
            decimal resultado = 0;

            if(Operador == "+")
                resultado = Valor1 + Valor2;
            if(Operador == "-")
                resultado = Valor1 - Valor2;
            if(Operador == "*")
                resultado = Valor1 * Valor2;
            if(Operador== "/")
                resultado = Valor1 / Valor2;

            Console.WriteLine($"O resultado da operaçãoe é {resultado}");
        }
    }
}