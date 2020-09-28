var i = 0;
i = i + 1;
i += 1;
i++;
++i;
console.log(i);//4

i = 0;
console.log(i++);//0
i = 0;
console.log(++i);//1

/* Используя while выведите все числа от 1 до 20  */
i = 1;
while(i <= 20){
  console.log(i++);
}

/* Выведите все нечётные числа от 1 до 20  */
i = 1;
while(i <= 20){
  console.log(i);
  i += 2;
}
/* Выведите квадраты всех чисел от 1 до 20  */
i = 1;
while(i <= 20){
  console.log(i*i);
  i++;
}

/*
*
***
*****
*******
*/
let s = '*', j = 0, N = 4;
while(j < N){
  console.log(s);
  s += '**';
  j++;
}

let n = -Math.random()*100;
//n = Math.ceil(n);
n = Math.floor(n);
if(n % 2){
  console.log('нечётное');
} else {
  console.log('чётное');	
}

console.log(n);

console.log(n % 2 ? 'нечёт': 'чет');

let p = n % 2 ? 'нечёт': 'чет';
console.log(p);


/*товар   1, 21, 31, ...
товара  2-4, 22-24, ...
товаров 0, 5-20, 25-30,...*/

let g = 35, w = 'товаров';
if( g % 100 < 5 || g % 100 > 20){
  if(g % 10 == 1)  w = 'товар';
  if(g % 10 > 1 && g % 10 < 5)
	  w = 'товара';
}
console.log(`В корзине ${g} ${w}`)

let bmi = 30.86, day = 1, menu;
switch(day){
  case 1: menu='диета, "какая разница"';  break;
  case 2: menu='картошка';  break;
  case 3: menu='гречка';  break;
  case 4: menu='рис';  break;
  case 5: menu='суп + котлеты';  break;
  default: menu='вода';
}
console.log(day, menu);

console.clear();
let m = 0;
do{
  console.log(++m);	
}while(m > 10);

console.log(typeof 'test');

console.clear();
for(let k = 0; k < 5; ++k ){
  //if( k == 3 )break;
  if( k == 3 ) continue;
  console.log(k);
}

/*Используя for выведите все числа от 1 до 20*/
for(let k = 1; k < 21; ++k ){
  console.log(k);
}


console.clear();
const rows = 10, cols = 10;
let table = '<table border=1>';
for(let i = 1; i <= rows; i++){
  table += '<tr>';
  for(let j = 1; j <= cols; ++j){
	  table += '<td>';
	  table += i * j;
  }
}
table += '</table>';
console.log(table);









