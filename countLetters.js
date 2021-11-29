const countLetters = (str) => {
  let letters = str.replaceAll(' ', '').replaceAll('\'', '').replaceAll(',', '')
  let alreadyUsed =[]
  let output = {}
  letters = letters.split('')
  console.log(letters)
  
  for (let letter of letters) {
    if (!alreadyUsed.includes(letter)) {
      alreadyUsed.push(letter)
      output[letter] = 1
      console.log(output[letter])
    }
    else if (alreadyUsed.includes(letter)) {
      output[letter] = output[letter] + 1
    }
  }
  return output
}

module.exports = countLetters;