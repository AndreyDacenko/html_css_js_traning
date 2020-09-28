//console.log(12);
let
 width   = 5,
 height  = 10,
 s       =0;
 
 
s= width * height;

console.log('Плошадь:'+s);

console.log(`Плошадь:${s}`);




let 
  S = 5e6, //тело кредита
  p = 10.5, //ставка
  n = 5, //срок
  A = 0;
  

  //n = n*12;
  n*=12;
  p/=100;
  p/=12;  
  A = (S * p)/(1- Math.pow(1+p,-n));
  console.log(A);  
  
  
  
let 
  m = 100,
  h = 1.8,
  I;  
  
  I = m/Math.pow(h,2);
  console.log(I);
  
  
  
  
  
  
  
  
  