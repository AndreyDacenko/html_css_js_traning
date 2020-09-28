let a1 = [
 [34,56],
 3,
 'q',
 ()=>5,
 {some:true}
];
a1[99] = 1;
console.log(typeof a1);
console.log(a1.length);
console.log(a1[0]);
console.log(a1[0][1]);
console.log(a1[3]());

let a2 = [], n = 20;
for(let i = 0; i <= n; ++i)
	a2[i] = i;
console.log(a2)

const getFibArray = n => {
	let fib = [1,1];
	for(let i = 2; i < n; ++i){
	  fib[i] = fib[i-1]+fib[i-2];
	}
	return fib;
}
console.clear()
console.log(getFibArray(13).join());
console.log(getFibArray(13).join('8'));
console.log(getFibArray(13).join('<li>'));


function my(a,b){
  if(a < b)
	  return 1;
  else
	  return -1;
}

let a3 = [2,34,78,5,1];
a3.sort(my);
console.log(a3)
console.log(a3.sort( (a,b) => a - b ))

a3.forEach( (e,i) => {
  console.log(e)
});

let a4 = a3.map( e => e * 2 );

console.log(a4);

console.log(a4.filter( e => e < 30));


for(let p in a4){
	console.log(p, a4[p])
}











