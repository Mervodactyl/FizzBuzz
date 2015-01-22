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

    it('divisible by Three and Five', function() {
      expect(fizzBuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it('NOT divisible by Three and Five', function() {
      expect(fizzBuzz.isDivisibleByThreeAndFive(1)).toBe(false);
    });
  });

  describe('FizzBuzz should return', function() {
    it('the number itself if not divisible by Three, Five or Three and Five', function() {
      expect(fizzBuzz.fizzBuzzSays(1)).toEqual(1);
    });

    it('"Fizz" when the number is divisible by Three', function() {
      expect(fizzBuzz.fizzBuzzSays(3)).toEqual('Fizz');
    });

    it('"Buzz" when the number is divisible by Five', function() {
      expect(fizzBuzz.fizzBuzzSays(5)).toEqual('Buzz');
    });

    it('"FizzBuzz" when the number is divisible by Three and Five', function() {
      expect(fizzBuzz.fizzBuzzSays(15)).toEqual('FizzBuzz');
    });


  });
});
