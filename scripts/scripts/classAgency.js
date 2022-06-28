class Agency {
    constructor(companyName, street, poBox, city, hasRestaurant, hasCafeteria){
        this.companyName = companyName;
        this.street = street;
        this.poBox = poBox;
        this.city = city;
        this.hasRestaurant = hasRestaurant;
        this.hasCafeteria = hasCafeteria;

    }
    
    meals(){
    if (this.hasRestaurant === true && this.hasCafeteria === false) {
        return "cafeteria"
    }else if(this.hasRestaurant === false && this.hasCafeteria === true){
        return "lunch tickets"
    }
    };
}
let agency1 = new Agency("Blue Bell","21, avenue Jules Ferry",92310, "SEVRES", true, false);