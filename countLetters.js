const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`)
  }
  else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `)
  }
};

const countLetters = (str) => {
  let letters = str.replaceAll(' ', '').replaceAll('\'', '').replaceAll(',', '')
  let alreadyUsed =[]
  let output = {}
  letters = letters.split('')
  console.log(letters)
  
  for (let letter of letters) {
    if (!alreadyUsed.includes(letter)) {
      alreadyUsed.push(letter)
      output.[letter] = 1
      console.log(output[letter])
    }
    else if (alreadyUsed.includes(letter)) {
      output.[letter] = output.[letter] + 1
    }
  }
  return output
}

countLetters(`hello, it's me`)