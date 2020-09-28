var 

i = 0;
i = i + 1;
i+= 1;
i++;
++i;
console.log(i);


i = 0;
while (i < 10){
	console.log(i++);
	console.log(i);	
}



i = 1;
 while (i <= 20){
	 console.log(i++);
 }
 
 //нечетные числа
i = 1;
 while (i<=20)
 {  
	 console.log(i);
	 i+=2;
 } 
 
 i = 1;
 while (i<=20)
 {  
	 console.log(i*i);
	 i++;
 } 
 /*
товар    1, 21, 31, ...
товара   2-4, 22-24, ...
товаров  0, 5-20, 25-30, ...*/

let g = 35, w = 'товаров';
if( g % 100 < 5 || g % 100 > 20){
	if(g % 10 ==1) w = 'товар';
	if(g % 10 > 1 && g % 10 < 5)
		w = 'товара';
}
console.log(`В корзине ${g} ${w}`)


let bmi = 30.86, day = 1, menu;
switch(day){
	case 1: menu='диета'; break;
	case 2: menu='жареная картошка'; break;
	case 3: menu='гречка'; break;
	case 4: menu='рис'; break;
	case 5: menu='суп'; break;
	default: menu='вода';
}
console.log(day, menu);



let m = 0;
do{
	console.log(++m);
}while(m < 10);


console.clear();
for(let k = 0; k<5; ++k ){
   // if( k == 3)break;
   if( k == 3) continue;
	console.log(k);
}

console.clear();
for(let i = 1; i<=20; ++i){
	console.log(i)
}

console.clear();
const rows = 10, cols = 10;
let table = '<table border=1>';
for(let i = 1; i<= rows; i++){
	table += '<tr>';
	for(let j = 1; j <= cols; ++j){
		table += '<td>';
		table += i * j;
	}
}
table += '</table>';
console.log(table);
document.write(table);

var i=0;
while (i>5){
	i++;
}
console.log(i);



function ipoteka(S,p,n);{
	n *=12;
	p /=100;
	p /=12;
	return S * p / (1 - Math.pow(1+p,-n));
}
console.log(ipoteka(5e6,10.5,5));
