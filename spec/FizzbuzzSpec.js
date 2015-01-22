describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('FizzBuzz should know if a number is', function() {
    it('divisible by Three', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('NOT divisible by Three', function() {
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by Five', function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('NOT divisible by Five', function() {
      expect(fizzBuzz.isDivisibleByFive(1)).toBe(false);
    });

    // it('divisible by Fifteen', function() {
    //   expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    // });

  });

});
