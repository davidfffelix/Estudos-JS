let friend = {name: `David`, 
gender: `Male`, 
weight: 84.5, 
fatten(w){
    console.log(`Fatten.`);
    this.weight += w;
}}

console.log(`${friend.name} weighs ${friend.weight}Kg.`);
friend.fatten(2);