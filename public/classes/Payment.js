//classes
export class Payment {
    //   public amount: number;
    //   constructor(readonly recipient: string, private details: string, n: number) {
    //     this.amount = n;
    //   }
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}
