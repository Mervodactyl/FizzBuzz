var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3) === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5) === 0;
};

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  return this._isDivisibleBy(number, 15) === 0;
};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return number % divisor;
};

FizzBuzz.prototype.fizzBuzzSays = function(number) {
  if
    (this._isDivisibleBy(number, 15) === 0) {
      return 'FizzBuzz';
  } else if
    (this._isDivisibleBy(number, 3) === 0) {
      return 'Fizz';
  } else if
    (this._isDivisibleBy(number, 5) === 0) {
      return 'Buzz';
  } else {
    return number;
  }

};
