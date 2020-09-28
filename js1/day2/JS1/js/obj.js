let box = {
	width: 50,
    height:	100,
	color: '#FF033E',
	meow: function(){
		return 'Лежит ' +this.name;
	}
};
box.name = 'Коробка';
console.log(box.name);
console.log(box["height"]);
console.log(box["width"]);
console.log(box.meow());

let prop = 'tail';
if("tail" in box)
console.log(box[prop]);


for(let x in box){
	console.log(x+'='+box[x]);
}



/*
метод box.getprops() - 
распечатает все свойства

*/

console.clear();
console.log(box+'')






