const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function rot13(str) {
    let resultado = ''
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if(char.includes(" ")) resultado += " ";
        else if (!alfabeto.includes(char.toLowerCase())) resultado += char;
        else {
            const posicao = alfabeto.indexOf(char.toLowerCase());
            let slide = (posicao + 13);
            if (slide > 25) {
              slide = slide - 25;
              resultado += (alfabeto[slide - 1]);
            }
            else {
              resultado += (alfabeto[slide])
            }
        }
    }
    return resultado.toUpperCase();
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");