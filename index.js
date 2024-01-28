class Breakfast {
    constructor(food, drink){
        this.food = food, 
        this.drink = drink
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad, 
        this.soup = soup,
        this.drink = drink
    }
}

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad = salad,
        this.soup = soup, 
        this.entree = entree, 
        this.#dessert = dessert
    }
}

const breakfastMenu1 = new Breakfast('omelette', 'orange juice');
console.log(breakfastMenu1); 
const lunchMenu1 = new Lunch('fruit salad','clam chowder','coke'); 
console.log(lunchMenu1); 
const dinnerMenu1 = new Dinner('ceasar salad','broccoli soup','filet mignon','wine'); 
console.log(dinnerMenu1); 