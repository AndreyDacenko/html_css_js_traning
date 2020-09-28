let city1 = {
	name: ГородN,
	population: 1e7,
	getName: function(){
		return 'city1' +this.name;
	}
	exportStr: function(){
		for(let name in this)
		{console.log(name)};
	    for(let populatiom in this)
		{console.log(population)};
	}
}


let city2 = {
	name: ГородM,
    population: 1e6,
    getName: function(){
	return 'city2' +this.name;
    }
    exportStr: function(){
	for(let name in this)}
	console.log(name)};
	 for(let populatiom in this)
	{console.log(population)};
}