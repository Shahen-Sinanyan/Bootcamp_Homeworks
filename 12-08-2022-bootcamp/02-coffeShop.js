class CoffeeShop {
    constructor (restaurantName, menue, orders = []) {
        this.name = restaurantName;
        this.menue = menue;
        this.orders = orders;
    }
    addOrder (nameFromMnue) {
       for (let item of this.menue) {
           if (item.name === nameFromMnue) {
               this.orders.push(nameFromMnue);
               return this.orders;
           }
       }
        return "This item is currently unavailable!";
    } 
    fulfillOrder () {
        if (this.orders.length > 0) {
            return `The ${ this.orders.splice(0,1)} is ready`;
        } else {
          return  "All orders have been fulfilled!";
        }
    } 
    listOrders () {
            return this.orders;
    } 
    dueAmount () {
        let amount = 0
        for (let name of this.orders) {
            for (let menueItem of this.menue) {
                if (name === menueItem.name ) {
                    amount += menueItem.price
                }
            }
        }
        return amount;
    }    
    cheapestItem () {
        let cheapest = this.menue[0].price
        let cheapestName = this.menue[0].name
        for (let item of this.menue) {
            if (item.price < cheapest) {
                cheapest = item.price ;
                cheapestName = item.name;
            }
        }
        return cheapestName;
    }    
    drinksOnly () {
        let drinksName = [];
        this.menue.forEach((item) => {
            if (item.type === 'drink') {
                drinksName.push(item.name);
            }
        });
        return drinksName;
    }
    foodOnly () {
        let foodsName = [];
        this.menue.forEach((item) => {
            if (item.type === 'food') {
                foodsName.push(item.name);
            }
        });
        return foodsName;
    } 
    
};
function Menue (name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
}


let menue123 = [];
menue123.push(new Menue("orange juice", 'drink', 1200),
           new Menue("lemonade", 'drink', 150),
           new Menue("cranberry juice", 'drink', 2000),
           new Menue("steak", 'food', 11000),
           new Menue("BBQ", 'food', 20000)
          )

let TemurnocRestaurant = new CoffeeShop('Temurnoc', menue123, [])