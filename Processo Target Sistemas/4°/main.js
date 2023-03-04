let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

const total = sp + rj + mg + es + outros

let percentualSP = (sp * 100) / total
let percentualRJ = (rj * 100) / total
let percentualMG = (mg * 100) / total
let percentualES = (es * 100) / total

console.log(total)
console.log(`São Paulo representa ${percentualSP.toFixed(2)}%`)
console.log(`Rio de Janeiro representa ${percentualRJ.toFixed(2)}%`);
console.log(`Minas Gerais representa ${percentualMG.toFixed(2)}%`);
console.log(`Espírito Santo representa ${percentualES.toFixed(2)}%`);
