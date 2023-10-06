/* Program to print an OR truth table */

let t = 1;
let f = 0;

let firstRow =  `\n${t}   ${t}\t  ${t || t}`;
let secondRow =  `\n${t}   ${f}\t  ${t || f}`;
let thirdRow =  `\n${f}   ${t}\t  ${f || t}`;
let fourthRow =  `\n${f}   ${f}\t  ${f || f}`;

console.log("\t ** OR table ** \n\nA | B  | A OR B");
console.log(firstRow);
console.log(secondRow);
console.log(thirdRow);
console.log(fourthRow);


