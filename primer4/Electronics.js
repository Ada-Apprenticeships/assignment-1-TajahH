import Product from "./Product";

export class Electronics extends Product {

    constructor(id, name, price, quantity){
        super(id, name, price, quantity);
        this.brand = brand;
        this.warranty = warranty;

    }

    getProductDetails(){
        const electronicDetails = super.getProductDetails();
        return {
            ...electronicDetails,
            brand: this.brand,
            warranty: this.warranty

        }
    }

    brand(){
        return this.brand;
    }

    warranty(){
        return this.warranty;
    }
}