function convertToRoman(num) {
    const numRomanos = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let novoNumRomano = '';
  
    for (let i = 0; i < numRomanos.length; i++) {
      while (num >= numRomanos[i].value) {
        novoNumRomano += numRomanos[i].numeral;
        num -= numRomanos[i].value;
      }
    }
  
    return novoNumRomano;
}
  
  convertToRoman(3999);