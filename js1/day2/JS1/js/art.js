let a1 = [
[55,56],
1,
'qwe',
()=>2,
{some:true}
];
a1[99] = 1;
console.log(typeof a1);
console.log(a1.length);
console.log(a1[0]);
console.log(a1[0][1]);
console.log(a1[3]());

/*let a2 = [], n = 20;
for (let i = 0; i<= n; ++i)
    a2[i] = n;

console.log(a2)
*/

/*let fib = [1,1], n = 20;
for (let i = 2; i< n; ++i){
	fib[i] = fib[i-1]+fib[i-2];
}


console.log(fib)
*/
const getFibArray = n => {
let fib = [1,1];
for (let i = 2; i< n; ++i){
	fib[i] = fib[i-1]+fib[i-2];
}
return fib;
}
console.log(getFibArray(15).join());
console.log(getFibArray(15).join('<li>'));







