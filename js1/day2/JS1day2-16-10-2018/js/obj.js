let cat = {
  age: 7,
  color: '#444',
  meow: function(){
	return 'Мяу, я '+this.name;
  },
  getProps: function(){
	for(let p in this){
	  console.log(p);
	}  
  },
  toString: function(){
	//return this.name;	  
	return `
	<h1>${this.name}</h1>
	<p>${this.age}
	`;
  }
};
cat.getProps = function(){
	let s = '';
	for(let p in this){
	  s += p + ' ';
	}  
	return s;
}

cat.name = 'Смурф';
console.log(cat.name);
console.log(cat["age"]);
console.log(cat.meow());

let prop = 'tail';
if(prop in cat)
  console.log(cat[prop]);

for(let хэ in cat){
  console.log(хэ+'='+cat[хэ]);
}

cat.getProps();

console.clear();
console.log(cat+'')

function addYear(n=1){
  this.age += n;
}

addYear.apply(cat,[2]);
addYear.call (cat, 2);
console.log(cat)


let clone = {};
for(let p in cat)
 if(typeof cat[p] != 'function')	
  clone[p] = cat[p];
clone.name = 'Барсик';
console.log(cat,clone)

let {name, age, color} = cat;
clone.name = name;
clone.age = age;
clone.color = color;







