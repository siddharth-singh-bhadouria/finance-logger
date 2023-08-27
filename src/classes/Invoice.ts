import { HasFormatter } from "../interfaces/hasFormatter";
//classes
export class Invoice implements HasFormatter {
  //   public amount: number;
  //   constructor(readonly client: string, private details: string, n: number) {
  //     this.amount = n;
  //   }

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ₹${this.amount} for ${this.details}`;
  }
}
