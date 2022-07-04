export class Item {
    public category: "Beer" | "Cigar" | "Electronics" | "Water";
    public description: string;
    public price: number;

    constructor(
        category: "Beer" | "Cigar" | "Electronics" | "Water",
        description: string,
        price: number
    ) {
        this.category = category;
        this.description = description;
        this.price = price;
    }
}

export class Order {
    public items: Item[];

    constructor() {
        this.items = [];
    }

    public addItem(item: Item) {
        return this.items.push(item);
    }

    public getTotal() {
        let totalSum: number = 0;
        this.items.forEach((item) => (totalSum += item.price));
        return totalSum;
    }

    public getTaxes() {
        let totalTaxes: number = 0;
        this.items.forEach((item) => {
            if (item.category === "Beer") {
                totalTaxes += new TaxItem(item).calculateTax(0.2);
            } else if (item.category === "Cigar") {
                totalTaxes += new TaxItem(item).calculateTax(0.25);
            } else if (item.category === "Electronics") {
                totalTaxes += new TaxItem(item).calculateTax(0.3);
            } else if (item.category === "Water") {
                totalTaxes += 0;
            }
        });

        return totalTaxes;
    }
}

class TaxItem extends Item {
    constructor(item: Item) {
        super(item.category, item.description, item.price);
    }

    public calculateTax(tax: number) {
        return this.price * tax;
    }
}
