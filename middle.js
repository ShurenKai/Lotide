const middle = (arr) => {
  if (arr.length < 3) {
    return [];
  } else {
    if ((arr.length - 1) % 2 === 0) {
      let midSection = (arr.length - 1) / 2;
      console.log(midSection);
      return arr[midSection];
    } else if (!(arr.length - 1) % 2 === 0) {
      let midSection = (arr.length - 1) / 2;
      let output1 = Math.floor(midSection);
      let output2 = Math.ceil(midSection);
      return [arr[output1], arr[output2]];
    }
  }
};

module.exports = middle;


/*
Pseudo code for implementation
const middle takes array
  if that array length is less than 3
    return empty array
  if the array length is more than 3
    check how long it is
    divide the length by 2 if it's an even number
    return the middle number
  or else
    still divide the length by 2
      if it's a decimal
      math ceil and math floor it
    return the ceil and floor numbers
*/