export class ShoppingListCheckOffService {
    private toBuyItems : any[] = [
        { name: "cookies", quantity: 10 },
        { name: "bottles of water", quantity: 20 },
        { name: "pies", quantity: 30 },
        { name: "tomatoes", quantity: 40 },
        { name: "chocolates", quantity: 50 },
        { name: "marmelade", quantity: 60 }];

    private boughtItems : any[] = [];

    constructor() {

    }

    moveToBought(index: number) {
        this.boughtItems.push(this.toBuyItems.splice(index, 1)[0]);
    };

    getToBuyItems() {
        return this.toBuyItems;
    }

    getBoughtItems() {
        return this.boughtItems;
    }
}