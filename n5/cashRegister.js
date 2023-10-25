function checkCashRegister(price, cash, cid) {
    const unidades = [
      ["ONE HUNDRED", 100.0],
      ["TWENTY", 20.0],
      ["TEN", 10.0],
      ["FIVE", 5.0],
      ["ONE", 1.0],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
    ];
  
    let trocoNecessario = cash - price;
    let total = 0;
    let change = [];
    let j = cid.length - 1;
  
    for (let i = 0; i < cid.length; i++) total += cid[i][1];
    total = Math.round(total * 100)/100;

    if (total < trocoNecessario) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    
    if (total === trocoNecessario) {
      return { status: "CLOSED", change: cid };
    }
  
    for (let i = 0; i < unidades.length; i++) {
      const [nome, valor] = unidades[i];
      let quantidade = cid[j][1];
      let moedasUsadas = 0;
      j --;
  
      while (trocoNecessario >= valor && quantidade > 0) {
        trocoNecessario = Math.round(trocoNecessario * 100)/100;
        trocoNecessario -= valor;
        quantidade -= valor;
        moedasUsadas += valor;
      }
  
      if (moedasUsadas > 0) {
        change.push([nome, moedasUsadas = Math.round(moedasUsadas * 100)/100]);
      }
    }
    
    if (trocoNecessario > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: change };
    }
}  

const resultado = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(resultado);