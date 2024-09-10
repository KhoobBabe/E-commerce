export class Product {

    constructor(
        public _id: string, // MongoDB will return _id instead of id
        public name: string,
        public price: number,
        public description: string,
        public availability: boolean,
        public category: string
      ) {}
    // Getters for the class
    getId() : string {
        return this._id;
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
    getCategory() : string {
        return this.category;
    }

    // Setters for the class
    setId(id: any): void {
        this._id = id;
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
    setCategory(category: string): void {
        this.category = category;
    }

}
