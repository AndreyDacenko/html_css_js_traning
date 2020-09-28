//console.log(12);

/*Найти площадь прямоугольника шириной 5 и высотой 10*/
let 
 width  = 5,//ширина
 height = 10,//высота
 s = 0;
 
s = width * height;
console.log('пл:'+s);
console.log(`пл:${s}`);

let 
 S = 5e6,//тело кредита
 p = 10.5,//ставка
 n = 5,//срок
 A;
 
//n = n * 12;
n *= 12;
p /= 100;
p /= 12;
A = S * p / (1 - Math.pow(1+p,-n));

console.log(A);
console.log(A*n-S);

/* Найти индекс массы тела I, при массе человека 100кг, а его рост 1.8м
 Math.round(36.6)*/
let mass = 100, h = 1.8, I;
I = mass / (h * h);
console.log(I);
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 