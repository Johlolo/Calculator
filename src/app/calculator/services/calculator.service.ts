/**
 * Serviço responsável por executar as operações
 * da calculadora
 * Github johlolo
 * @author Johannes
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // Define constantes utilizadas para identificar as operações de cálculo
  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado dois números.
   * Suporta as operações soma, subtração, divisão e multiplicação
   * 
   * @param num1 number
   * @param num2 number
   * @param operation string Operação a ser executada
   * @return number Resultado da operação
   */
  calculate(num1: number, num2: number, operation: string): number {
    let result: number; // Armazena o resultado da operação

    switch(operation) {
      case CalculatorService.SUM:
        result = num1 + num2;
      break;
      case CalculatorService.SUBTRACTION:
        result = num1 - num2;
      break;
      case CalculatorService.DIVISION:
        result = num1 / num2;
      break;
      case CalculatorService.MULTIPLICATION:
        result = num1 * num2;
      break;
      default:
        result = 0;
    }

    return result;
  }

}

