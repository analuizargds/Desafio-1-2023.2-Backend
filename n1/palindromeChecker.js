const alfanum = 'abcdefghijklmnopqrstuvwxyz1234567890';
let letra;

function compara (charI, charF) {
  if (alfanum.includes(charI) ) {
    if(charI == charF) {
      letra = true;
    }
    else {
      letra = false;     
    } 
  }
  else letra = false;
  return letra;
}

function palindrome(str) {

  const novaStr = str.replace(/[,\s:\-/|._()]/g, '');
  let j = novaStr.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (i == j || i > j) break;
    else {
      const charI = novaStr[i].toLowerCase();
      const charF = novaStr[j].toLowerCase();
      if(!compara(charI, charF)) break;
      else j--;
    }
  }
  console.log(letra);
  return letra;
}

palindrome("1 eye for of 1 eye.");

