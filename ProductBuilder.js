

    let item = function(name, description, manufacturer, price, quantity) {

        this.name = name;
        this.description = description;
        this.manufacturer = manufacturer;
        this.price = price;
        this.quantity = quantity;
    }
    


    // constructor() {
    //     this.item = {
    //         name: '',
    //         manufacturer: '',
    //         price: 0,
    //         quantity: 0,
    //     };
    // }


 export let  ItemBuilder = function ()  {
let name;
let manufacturer;
let price;
let quantity;

return {
    setName = function  (name) {
        this.name = name;
        return this;
    },
    setManufacturer = function(manufacturer)  {
        this.manufacturer = manufacturer;
        return this;
    },
    setPrice = function(price) {
        this.price = price;
        return this;
    },
    setQuantity=  function (quantity){
        this.quantity = quantity;
        return this;
    },
    build = function  () {
        return new Item(name, manufacturer, price, quantity);
    }
};
    } 

   
