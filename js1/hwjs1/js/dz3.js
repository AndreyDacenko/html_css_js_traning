//ЗАДАЧА1
function hello() {
  return("Привет, JavaScript!");
}
console.log(hello());

//ЗАДАЧА2 ругается на ретёрн
function hello2() {
    let name = 'Василий';
    return("Привет, Василий " +this.name);
    if (name == underfined){
        return("Привет, гость");
    }
}
console.log(hello2());

//ЗАДАЧА3
function mul(n,m){
	    return n * m;
} 
let f = mul(5,10);
console.log(f);

//ЗАДАЧА4 не понял

//ЗАДАЧА5

/*function rgb(r,g,b){
 return 'rgb('r','g','b')';
}
 let  f1 = rgb(23,100,34);

console.log(f1);*/