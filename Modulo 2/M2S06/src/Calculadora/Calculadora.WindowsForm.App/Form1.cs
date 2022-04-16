namespace Calculadora.WindowsForm.App
{
    public partial class Form1 : Form
    {
        double resultValue = 0;
        string operationPerfomed = "";
        bool isOperationClicked = false;
        public Form1()
        {
            InitializeComponent();
        }


        private void button_Click(object sender, EventArgs e)
        {
            if (TextBoxResult.Text == "0" || isOperationClicked)
                TextBoxResult.Clear();
            isOperationClicked = false;
            Button button = (Button)sender;
            if (button.Text == ".")
            {
                if(!TextBoxResult.Text.Contains("."))
                    TextBoxResult.Text = TextBoxResult.Text + button.Text;
            }
            else
                TextBoxResult.Text = TextBoxResult.Text + button.Text; 
        }

        private void operator_Click(object sender, EventArgs e)
        {
            Button button = (Button)sender;

            if(resultValue != 0)
            {
                button16.PerformClick();
                operationPerfomed = button.Text;
                currentOperation.Text = resultValue + " " + operationPerfomed;
                isOperationClicked = true;
            }
            else
            {
                operationPerfomed = button.Text;
                resultValue = double.Parse(TextBoxResult.Text);
                currentOperation.Text = resultValue + " " + operationPerfomed;
                isOperationClicked = true;
            }
        
        }

        private void button5_Click(object sender, EventArgs e)
        {
            TextBoxResult.Text = "0";
        }

        private void button6_Click(object sender, EventArgs e)
        {
            TextBoxResult.Text = "0";
            resultValue = 0;
        }

        private void button16_Click(object sender, EventArgs e)
        {
          
            switch (operationPerfomed)
            {
                case "+":
                    TextBoxResult.Text = (resultValue + double.Parse(TextBoxResult.Text)).ToString();
                    break;
                    case "-": TextBoxResult.Text = (resultValue - double.Parse(TextBoxResult.Text)).ToString();
                    break;
                case "*":
                    TextBoxResult.Text = (resultValue * double.Parse(TextBoxResult.Text)).ToString();
                    break;
                case "/":
                    TextBoxResult.Text = (resultValue / double.Parse(TextBoxResult.Text)).ToString();
                    break;
            }
            resultValue = double.Parse(TextBoxResult.Text);
            currentOperation.Text = "";
            resultValue = 0;

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}