// The decoded word should be reversed

const alpha = {
    A: "Z",
    B: "Y",
    C: "X",
    D: "W",
    E: "V",
    F: "U",
    G: "T",
    H: "S",
    I: "R",
    J: "Q",
    K: "P",
    L: "O",
    M: "N",
    N: "M",
    O: "L",
    P: "K",
    Q: "J",
    R: "I",
    S: "H",
    T: "G",
    U: "F",
    V: "E",
    W: "D",
    X: "C",
    Y: "B",
    Z: "A",
  };
  
  /**
   * Reverses a given word by replacing each letter with its corresponding 
   * reversed letter in the alphabet. If the letter is not in the alphabet, 
   * it is left as is. The function ignores case and treats upper and lower 
   * case letters as the same.
   * @param {string} str - The word to reverse
   * @return {string} The reversed word
   */
  const reverseWord = (str) => {
    let reversedWord = "";
    for (let char of str.toUpperCase()) {
      if (alpha[char]) {
        reversedWord += alpha[char];
      } else {
        reversedWord += char;
      }
    }
    return reversedWord;
  };
  
  // Example usage
  console.log(reverseWord("LTSVMVGVTZ HFKIVNV"));