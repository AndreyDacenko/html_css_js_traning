function sum1(a,b){
	return a + b;
}
sum1();
console.log(sum1(10,100));


function ipoteka(S,p,n){
	n *=12;
	p /=100;
	p /=12;
	return S * p / (1 - Math.pow(1+p,-n));
}
console.log(ipoteka(5e6,10.5,5));


//
const sum2 = function(a,b){
	return a+b;
}
console.log(sum2(20,200));


//стрелочный стиль
/*
const sum3 = (a,b) => {
	return a + b;
}
*/
const sum3 = (a,b) => a + b;
console.log(sum3(30,300));


const oddity = (n) =>{
	if(n % 2)
		return 'нечетное';
	else 
		return 'четное';
}
console.log( oddity ( 234 ));

const oddity2 = n => n % 2 ? 'нечетное' : 'четное';
console.log( oddity2 ( 235 ));

/*
напишите функцию sequence, которая принимает целое положительное число n, а возвращает другую функцию. 
Возвращаемая функция , при каждом вызове должна указывать очередное число , прибавляя единицу к предыдущему
*/
/*
function sequence( n = 0 ){
	function some (){
		return ++n;
	}
	return some;
}

let foo = sequence(10);

console.log( foo() );//11
console.log( foo() );//12
console.log( foo() );//13
*/


const sequence1 = n => () => ++n;

let foo = sequence1(10);


console.log( foo() );//11
console.log( foo() );//12
console.log( foo() );//13




const sum4 = function(){
 //console.log(arguments.length); 	
 //console.log(arguments[2]);
 let s = 0, len = arguments.length;
 for(let i = 0; i < len; i++) {
	 s += arguments[i];
 }
	 return s;
 }
console.log( sum4(5,10,100,2000,5555));
console.log( sum4(5,6,7));




/*
<div style="width:30px">3</div>
<div style="width:50px">5</div>
<div style="width:70px">7</div>
<div style="width:40px">4</div>
<div style="width:10px">1</div>
*/
const graph = function (){
	let s = '' , len = arguments.length;
	for(let i = 0; i < len; i++){
		k = arguments[i];
		s+= `<div style="width:${k*10}px">${k}</div>\n`;
}

return s;
}

console.log(graph(3,5,7,4,1));













