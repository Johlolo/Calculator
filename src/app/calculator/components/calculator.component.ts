import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private num1: string;
  private num2: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.clean();
  }

  /**
   * Inicializa todos os operadores para os valores padrão.
   * 
   * @return void
   */
  clean(): void {
    this.num1 = '0';
    this.num2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   * Adiciona o número selecionado para o válculo posteriormente.
   * 
   * @param string numero
   * @result void
   */
  addNumber(number: string): void {
    if (this.operation === null) {
      this.num1 = this.concatNumber(this.num1, number);
    } else {
      this.num2 = this.concatNumber(this.num2, number);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   * 
   * @param string currentNumber
   * @param string numConcat
   * @return string
   */
  concatNumber(currentNumber: string, numConcat: string): string {
    // Caso contenha apenas '0' ou null, reinicia o valor
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }

    // Caso o primeiro digito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && currentNumber === '') {
      return '0.';
    }

    // Caso '.' seja digitado e já contenha um '.', apenas retorna
    if (numConcat === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + numConcat;
  }

  /**
   * Executa a lógica quando um operador for selecionado.
   * Caso já possua uma operação selecionada, executa a operação anterior
   * e define a nova operação.
   * 
   * @param string operation
   * @return void
   */
  defineOperation(operation: string): void {
    // Apenas define a operação caso não exista uma
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    // Caso operação seja definida e número 2 selecionado, efetua o cálculo da operação
    if (this.num2 !== null) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operation
      );
      this.operation = operation;
      this.num1 = this.result.toString();
      this.num2 = null;
      this.result = null;
    }
  }

  /**
   * Efetua o cálculo de uma operação
   * 
   * @return void
   */
  calculate(): void {
    if (this.num2 === null) {
      return;
    }

    this.result = this.calculatorService.calculate(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operation
    );
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * 
   * @return string
   */
  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.num2 !== null) {
      return this.num2;
    }
    return this.num1;
  }

}
