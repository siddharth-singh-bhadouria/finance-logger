import { HasFormatter } from "../interfaces/hasFormatter";
//classes
export class Payment implements HasFormatter {
  //   public amount: number;
  //   constructor(readonly recipient: string, private details: string, n: number) {
  //     this.amount = n;
  //   }

  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
  }
}
