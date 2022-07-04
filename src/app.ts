class Item {
    public category: string;
    public description: string;
    public price: number;
    public type: "Beer" | "Cigar" | "Electronics" | "Water";

    constructor(
        category: string,
        description: string,
        price: number,
        type: "Beer" | "Cigar" | "Electronics" | "Water"
    ) {
        this.category = category;
        this.description = description;
        this.price = price;
        this.type = type;
    }
}

class Order {
    public items: Item[];

    constructor(items: Item[]) {
        this.items = items || [];
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
            if (item.type === "Beer") {
                totalTaxes += item.price * 0.2;
            } else if (item.type === "Cigar") {
                totalTaxes += item.price * 0.25;
            } else if (item.type === "Electronics") {
                totalTaxes += item.price * 0.3;
            } else if (item.type === "Water") {
                totalTaxes += 0;
            }
        });

        return totalTaxes;
    }
}
