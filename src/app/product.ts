export class Product {

    constructor (private id: any, private name: string, private price: number, private description: string) {
    }

    // Getters for the class
    getId() : any {
        return this.id;
    }
    getname() : string {
        return this.name;
    }
    getPrice() : number {
        return this.price;
    }
    getDescription() : string {
        return this.description
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

}


function calculateTotalPrice(products: Product[]): number {

    let totalPrice = 0;
    for (const product of products) {
        totalPrice += product.getPrice();
    }
    return totalPrice;

}