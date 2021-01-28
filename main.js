//Operador AND &&
let af = true;
let ne = false;

console.log(`%cOperador and '&&', "color:blue";`);
console.log(`${ne} and ${ne} = ${ne && ne}`);
console.warn(`${af} and ${ne} = ${af && ne}`);
console.log(`${ne} and ${af} = ${ne && af}`);
console.warn(`${af} and ${af} = ${af && af}`);

//Operador OR ||
console.log(`%cOperador or '||', "color:yellow";`);
console.log(`${ne} or ${ne} = ${ne || ne}`);
console.warn(`${af} or ${ne} = ${af || ne}`);
console.log(`${ne} or ${af} = ${ne || af}`);
console.warn(`${af} or ${af} = ${af || af}`);

//Operador NOT !
console.log(`%cOperador not '!', "color:green";`);
console.log(`${ne} = ${!ne}`);
console.warn(`${af} = ${!af}`);

