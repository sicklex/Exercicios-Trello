﻿namespace Calculadora.WindowsForm.App
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.TextBoxResult = new System.Windows.Forms.RichTextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.button4 = new System.Windows.Forms.Button();
            this.button5 = new System.Windows.Forms.Button();
            this.button6 = new System.Windows.Forms.Button();
            this.button7 = new System.Windows.Forms.Button();
            this.button8 = new System.Windows.Forms.Button();
            this.button9 = new System.Windows.Forms.Button();
            this.button10 = new System.Windows.Forms.Button();
            this.button12 = new System.Windows.Forms.Button();
            this.button13 = new System.Windows.Forms.Button();
            this.button14 = new System.Windows.Forms.Button();
            this.button15 = new System.Windows.Forms.Button();
            this.button16 = new System.Windows.Forms.Button();
            this.button17 = new System.Windows.Forms.Button();
            this.button18 = new System.Windows.Forms.Button();
            this.button20 = new System.Windows.Forms.Button();
            this.currentOperation = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // TextBoxResult
            // 
            this.TextBoxResult.BackColor = System.Drawing.SystemColors.HighlightText;
            this.TextBoxResult.Font = new System.Drawing.Font("Symbol", 36F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.TextBoxResult.Location = new System.Drawing.Point(12, 42);
            this.TextBoxResult.Name = "TextBoxResult";
            this.TextBoxResult.RightToLeft = System.Windows.Forms.RightToLeft.Yes;
            this.TextBoxResult.Size = new System.Drawing.Size(303, 66);
            this.TextBoxResult.TabIndex = 2;
            this.TextBoxResult.Text = "0";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(12, 154);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(55, 53);
            this.button1.TabIndex = 3;
            this.button1.Text = "7";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button_Click);
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(73, 154);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(55, 53);
            this.button2.TabIndex = 4;
            this.button2.Text = "8";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(134, 154);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(55, 53);
            this.button3.TabIndex = 5;
            this.button3.Text = "9";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button_Click);
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(195, 154);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(55, 53);
            this.button4.TabIndex = 6;
            this.button4.Text = "/";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.operator_Click);
            // 
            // button5
            // 
            this.button5.Location = new System.Drawing.Point(256, 154);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(55, 53);
            this.button5.TabIndex = 7;
            this.button5.Text = "CE";
            this.button5.UseVisualStyleBackColor = true;
            this.button5.Click += new System.EventHandler(this.button5_Click);
            // 
            // button6
            // 
            this.button6.Location = new System.Drawing.Point(256, 213);
            this.button6.Name = "button6";
            this.button6.Size = new System.Drawing.Size(55, 53);
            this.button6.TabIndex = 12;
            this.button6.Text = "C";
            this.button6.UseVisualStyleBackColor = true;
            this.button6.Click += new System.EventHandler(this.button6_Click);
            // 
            // button7
            // 
            this.button7.Location = new System.Drawing.Point(195, 213);
            this.button7.Name = "button7";
            this.button7.Size = new System.Drawing.Size(55, 53);
            this.button7.TabIndex = 11;
            this.button7.Text = "*";
            this.button7.UseVisualStyleBackColor = true;
            this.button7.Click += new System.EventHandler(this.operator_Click);
            // 
            // button8
            // 
            this.button8.Location = new System.Drawing.Point(134, 213);
            this.button8.Name = "button8";
            this.button8.Size = new System.Drawing.Size(55, 53);
            this.button8.TabIndex = 10;
            this.button8.Text = "6";
            this.button8.UseVisualStyleBackColor = true;
            this.button8.Click += new System.EventHandler(this.button_Click);
            // 
            // button9
            // 
            this.button9.Location = new System.Drawing.Point(73, 213);
            this.button9.Name = "button9";
            this.button9.Size = new System.Drawing.Size(55, 53);
            this.button9.TabIndex = 9;
            this.button9.Text = "5";
            this.button9.UseVisualStyleBackColor = true;
            this.button9.Click += new System.EventHandler(this.button_Click);
            // 
            // button10
            // 
            this.button10.Location = new System.Drawing.Point(12, 213);
            this.button10.Name = "button10";
            this.button10.Size = new System.Drawing.Size(55, 53);
            this.button10.TabIndex = 8;
            this.button10.Text = "4";
            this.button10.UseVisualStyleBackColor = true;
            this.button10.Click += new System.EventHandler(this.button_Click);
            // 
            // button12
            // 
            this.button12.Location = new System.Drawing.Point(195, 272);
            this.button12.Name = "button12";
            this.button12.Size = new System.Drawing.Size(55, 53);
            this.button12.TabIndex = 16;
            this.button12.Text = "-";
            this.button12.UseVisualStyleBackColor = true;
            this.button12.Click += new System.EventHandler(this.operator_Click);
            // 
            // button13
            // 
            this.button13.Location = new System.Drawing.Point(134, 272);
            this.button13.Name = "button13";
            this.button13.Size = new System.Drawing.Size(55, 53);
            this.button13.TabIndex = 15;
            this.button13.Text = "3";
            this.button13.UseVisualStyleBackColor = true;
            this.button13.Click += new System.EventHandler(this.button_Click);
            // 
            // button14
            // 
            this.button14.Location = new System.Drawing.Point(73, 272);
            this.button14.Name = "button14";
            this.button14.Size = new System.Drawing.Size(55, 53);
            this.button14.TabIndex = 14;
            this.button14.Text = "2";
            this.button14.UseVisualStyleBackColor = true;
            this.button14.Click += new System.EventHandler(this.button_Click);
            // 
            // button15
            // 
            this.button15.Location = new System.Drawing.Point(12, 272);
            this.button15.Name = "button15";
            this.button15.Size = new System.Drawing.Size(55, 53);
            this.button15.TabIndex = 13;
            this.button15.Text = "1";
            this.button15.UseVisualStyleBackColor = true;
            this.button15.Click += new System.EventHandler(this.button_Click);
            // 
            // button16
            // 
            this.button16.Location = new System.Drawing.Point(256, 272);
            this.button16.Name = "button16";
            this.button16.Size = new System.Drawing.Size(55, 112);
            this.button16.TabIndex = 22;
            this.button16.Text = "=";
            this.button16.UseVisualStyleBackColor = true;
            this.button16.Click += new System.EventHandler(this.button16_Click);
            // 
            // button17
            // 
            this.button17.Location = new System.Drawing.Point(195, 331);
            this.button17.Name = "button17";
            this.button17.Size = new System.Drawing.Size(55, 53);
            this.button17.TabIndex = 21;
            this.button17.Text = "+";
            this.button17.UseVisualStyleBackColor = true;
            this.button17.Click += new System.EventHandler(this.operator_Click);
            // 
            // button18
            // 
            this.button18.Location = new System.Drawing.Point(134, 331);
            this.button18.Name = "button18";
            this.button18.Size = new System.Drawing.Size(55, 53);
            this.button18.TabIndex = 20;
            this.button18.Text = ".";
            this.button18.UseVisualStyleBackColor = true;
            this.button18.Click += new System.EventHandler(this.button_Click);
            // 
            // button20
            // 
            this.button20.Location = new System.Drawing.Point(12, 331);
            this.button20.Name = "button20";
            this.button20.Size = new System.Drawing.Size(116, 53);
            this.button20.TabIndex = 18;
            this.button20.Text = "0";
            this.button20.UseVisualStyleBackColor = true;
            this.button20.Click += new System.EventHandler(this.button_Click);
            // 
            // currentOperation
            // 
            this.currentOperation.AutoSize = true;
            this.currentOperation.Location = new System.Drawing.Point(24, 16);
            this.currentOperation.Name = "currentOperation";
            this.currentOperation.Size = new System.Drawing.Size(0, 15);
            this.currentOperation.TabIndex = 23;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Azure;
            this.ClientSize = new System.Drawing.Size(327, 401);
            this.Controls.Add(this.currentOperation);
            this.Controls.Add(this.button16);
            this.Controls.Add(this.button17);
            this.Controls.Add(this.button18);
            this.Controls.Add(this.button20);
            this.Controls.Add(this.button12);
            this.Controls.Add(this.button13);
            this.Controls.Add(this.button14);
            this.Controls.Add(this.button15);
            this.Controls.Add(this.button6);
            this.Controls.Add(this.button7);
            this.Controls.Add(this.button8);
            this.Controls.Add(this.button9);
            this.Controls.Add(this.button10);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.TextBoxResult);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Name = "Form1";
            this.Text = "Calculator";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private RichTextBox TextBoxResult;
        private Button button1;
        private Button button2;
        private Button button3;
        private Button button4;
        private Button button5;
        private Button button6;
        private Button button7;
        private Button button8;
        private Button button9;
        private Button button10;
        private Button button12;
        private Button button13;
        private Button button14;
        private Button button15;
        private Button button16;
        private Button button17;
        private Button button18;
        private Button button20;
        private Label currentOperation;
    }
}