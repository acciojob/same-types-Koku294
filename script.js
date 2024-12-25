function isSameType(value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

console.log(isSameType(5, 3));        // true
console.log(isSameType("hey", "hello")); // true
console.log(isSameType(NaN, NaN));    // true
console.log(isSameType("3", 3));      // false

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Try to parse the input values to integers
let intValue1 = parseInt(value1);
let intValue2 = parseInt(value2);

// If the parsing was successful, use the parsed values. Otherwise, use the original values.
value1 = isNaN(intValue1) ? value1 : intValue1;
value2 = isNaN(intValue2) ? value2 : intValue2;

alert(isSameType(value1, value2));