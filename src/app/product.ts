export class Product {

    constructor (public id: any, public name: string, public price: number, public description: string, public availability: boolean = true) {
    }

    // Getters for the class
    getId() : any {
        return this.id;
    }
    getName() : string {
        return this.name;
    }
    getPrice() : number {
        return this.price;
    }
    getDescription() : string {
        return this.description;
    }
    getAvailability() : boolean {
        return this.availability;
    }

    // Setters for the class
    setId(id: any): void {
        this.id = id;
    }
    setName(name: string): void {
        this.name = name;
    }
    setPrice(price: number): void {
        this.price = price;
    }
    setDescription(description: string): void {
        this.description = description;
    }

    setAvailability(availability: boolean): void {
        this.availability = availability;
    }

}


function calculateTotalPrice(products: Product[]): number {

    let totalPrice = 0;
    for (const product of products) {
        totalPrice += product.getPrice();
    }
    return totalPrice;

}