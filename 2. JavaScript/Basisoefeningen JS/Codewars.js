//1.Convert boolean values to strings 'Yes' or 'No'.
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// in one line without func: const boolToWord = bool => bool ? 'Yes' : 'No';

function boolToWord(bool) {
  if (bool) {
    return "Yes"; // console.log( "Yes"); => undefined
  } else {
    return "No";
  }
}

console.log(boolToWord(1));

//2.Return Negative:

function makeNegative(num) {
  return 0 - Math.abs(num); //също: return num < 0 ? num : -num;
  // връща абсолютната стойност, обикновено: от -1 -> +1, но тук с '-';
}

console.log(makeNegative(1));
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); //return -0.12

//3.Even or odd
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(even_or_odd(2));
