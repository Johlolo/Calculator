import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud guarantee that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.calculate(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    })
  );

  it('shoud guarantee that 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let subtraction = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(subtraction).toEqual(-3);
    })
  );

  it('shoud guarantee that 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let division = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(division).toEqual(0.25);
    })
  );

  it('shoud guarantee that 1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let multiplication = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(multiplication).toEqual(4);
    })
  );

  
  it('shoud return 0 to invalid operation',
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperation = service.calculate(1, 4, '%');
      expect(invalidOperation).toEqual(0);
    })
  );
});
