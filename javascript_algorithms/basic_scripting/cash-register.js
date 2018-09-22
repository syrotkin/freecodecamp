function checkCashRegister(price, cash, cid) { 
  if (cash < price) {
    // error
    console.log("error: cash < price");
    return [];
  }

  let changeAmountInCents = (cash - price) * 100;
  let cidAmountInCents = calculatecidAmountInCents(cid);
  let cidInCents = convertToCents(cid);
  let changeAmountInCentsCopy = changeAmountInCents;
  
  let change = [];
  calculateChange(cidInCents, changeAmountInCentsCopy, change);
  let finalChangeAmountInCents = calculatecidAmountInCents(change);
  console.log("get here");
  if (cidAmountInCents < changeAmountInCents || finalChangeAmountInCents  !== changeAmountInCentsCopy) {
    console.log("finalChangeAmountInCents: " + finalChangeAmountInCents);
    console.log("changeAmountInCentsCopy: " + changeAmountInCentsCopy);
    console.log("insufficient");
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (cidAmountInCents === changeAmountInCents) {
    console.log("closed");
    return {status: "CLOSED", change: cid};
  } else {
    console.log("closed");
    return {status: "OPEN", change: change};
  }
}


function convertToCents(cid) {
  let arrayCopy = [];
  for (let i = 0; i < cid.length; i++) {
    arrayCopy.push([cid[i][0], Math.round(cid[i][1] * 100)]);
  }

  return arrayCopy;
}

// greedy -- will not work for every currency
function calculateChange(cid, changeAmountInCents, change) {
  console.log("called with: " + cid);
  console.log("called with changeAmountInCents: " + changeAmountInCents);
  console.log("called with change: " + change);


 let amounts = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

  for (let i = amounts.length - 1; i >= 0; i--) {
    let denomination = amounts[i][1];
    let amount =  Math.round(denomination * 100);
    let name = amounts[i][0];
       
    console.log("cid amoutn: " + Math.floor(cid[i][1] / amount));

    while (changeAmountInCents >= amount && Math.floor(cid[i][1] / amount) >= 1) {
      let indexOf100 = indexOf(change, name);
      if (indexOf100 === -1) {
        change.push([name, denomination]);
      } else {
        change[indexOf100][1] =  parseFloat((change[indexOf100][1] + denomination).toFixed(2));
      }
      changeAmountInCents -= amount
      cid[i][1] -= amount;
    }
  }
}


function indexOf(change, name) {
  for (let i = 0; i < change.length; i++) {
    if (change[i][0] === name) {
      return i;
    }
  }
  return -1;
}


function calculatecidAmountInCents(cid) {
   let total = 0;
   for (let i = 0; i < cid.length; i++) {
     total+= Math.round(cid[i][1] * 100);
   }

   return total;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


