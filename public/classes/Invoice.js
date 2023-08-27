//classes
export class Invoice {
    //   public amount: number;
    //   constructor(readonly client: string, private details: string, n: number) {
    //     this.amount = n;
    //   }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
