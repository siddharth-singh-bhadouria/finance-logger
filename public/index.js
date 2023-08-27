"use strict";
//classes
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("naruto", "work on the naruto website", 10000);
const invTwo = new Invoice("sasuke", "work on the sasuke website", 12000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((invoice) => {
    console.log(invoice.format());
});
// forms
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
