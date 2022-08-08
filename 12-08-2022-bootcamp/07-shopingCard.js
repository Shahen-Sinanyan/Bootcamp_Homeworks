class Product {
    constructor (name, type, price ) {
        this.name = name;
        this.type = type;
        this.price = price;
        if (this.name === undefined || this.type === undefined || this.price === undefined) {
            throw new Error('please enter name, type and price');
        }
    }
}

class ShoppingCart {
    constructor () {
        this.container = [];
    }
    addProduct (...products) {
        for (let item of products) {
            if (item.constructor === Product) {
                this.container.push(item);
            }
        }
        console.log('added_items:', this.container);
    }
    removeProduct (...products) {
        let removedItems = [];
        for (let item of products) {
            this.container.splice(this.container.indexOf(item),1);
            removedItems.push(item);
        }
       console.log("removed_items:", removedItems);
    }
    totalPrice () {
        let amount = 0;

        // all price amount
        for (let product of this.container) { 
           if (product.price !== undefined && product.price === product.price) {
                amount += product.price;
           }
        };

        // if products >= 5 ==> discount
        if (this.container.length >= 5) { 
            amount -= (amount*10/100);
        };

        //every 4-th same product is free
        let checkProdArr = [];
        let sameProduct = 0;
        for (let i = 0; i < this.container.length; i++) {
            if (!checkProdArr.includes(this.container[i].name)) {
                for (let j = 0; j < this.container.length; j++) {
                    if (this.container[i].name === this.container[j].name) {
                        sameProduct++;
                    }
                }
                amount -= this.container[i].price * (Math.floor((sameProduct-0.000000001)/3));
            }  
            sameProduct = 0;
            checkProdArr.push(this.container[i].name);
        }
        return amount;
    }
    replace(productName, replacementProduct) {
        for (let i = 0; i < this.container.length; i++) {
            if (this.container[i].name === productName) {
                this.container[i] = replacementProduct;
                break
            }
        }
    }
}
let carrot1 = new Product('carrot', 'vegetable', 300)
let carrot2 = new Product('carrot', 'vegetable', 300)
let carrot3 = new Product('carrot', 'vegetable', 300)
let carrot4 = new Product('carrot', 'vegetable', 300)
let carrot5 = new Product('carrot', 'vegetable', 300)
let pencil = new Product('pencil', 'pen', 3300)
let vodka = new Product('ohanyan', 'drink', 10000)
let meat = new Product('beef', 'meat', 3800)
let x = {} //chi avelacni

let card = new ShoppingCart()

console.log(card.addProduct(carrot1, carrot2, carrot3, carrot4, carrot5, pencil, vodka, meat, x));
console.log(card.removeProduct(carrot5, pencil));
console.log(card.replace('pencil', carrot5));
console.log(card.totalPrice())