let numeros ='1234567890';

function telephoneCheck(str) {

  const novaStr = str.replace(/\s|-|\(|\)/g, '');

    if (novaStr.length === 10 || (novaStr.length === 11 && novaStr[0] === '1')) {
        for (let i = 0; i < novaStr.length; i++) {
            if (!numeros.includes(novaStr[i])) {
                return false;
            }
        }
        if (/^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/.test(str)) {
            return true;
        }
    }
    return false;
}
  
telephoneCheck("555-555-5555");
