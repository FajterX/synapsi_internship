let products = [
{"name": "Prod1", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod2", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod3", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod4", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod5", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod6", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod7", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod8", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod9", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
{"name": "Prod10", "amount": {"min": 0, "max": 100}, "price": {"min": 0, "max": 100}},
];

let obj_list = [];

class ParentProduct{
    constructor(name) {
        this.name = name;
    }

    show_name() {
        console.log(`Name of this product is ${this.name}`);
    }
}

//1#

class Product extends ParentProduct {
	constructor(name, amount, price) {
		super(name);
		this.amount = amount;
		this.price = price;
	}

	show_price(currency) {
		console.log(this.name + ' price is ' + this.price);
	}

	show_amount() {
		console.log(this.name + ' amount is ' + this.amount);
	}

	calculate_total_value() {
		return this.amount * this.price;
	}
}

products = products.map((product) => {
	product.amount = product.amount.max * Math.floor(Math.random() * 100) / 100 + product.amount.min;
	product.price = product.price.max * Math.floor(Math.random() * 100) / 100 + product.price.min;
	return product;
});

obj_list = products.map((product) => {
	return new Product(product.name, product.amount, product.price);
});

summary_values = obj_list.map((product) => product.calculate_total_value());

fetch('http://127.0.0.1:5000/write', {
	method: 'POST',
	mode: 'no-cors',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		summary_values: summary_values,
		products: products,
		obj_list: obj_list
	})
}).then((response) => null);

//2#

min_value = Math.floor(Math.random() * 150);
max_value = Math.floor(Math.random() * 125) + 75;

if (min_value > max_value) max_value = min_value + 1;

var msg = 'Input number in range ' + min_value + ' - ' + max_value + ':';
var input_value = prompt(msg);

while (!(parseInt(input_value) <= max_value) || !(parseInt(input_value) >= min_value)) {
	var newMsg = '';

	if (parseInt(input_value) > max_value) newMsg = msg + '\n' + 'number is too big';
	else if (parseInt(input_value) < min_value) newMsg = msg + '\n' + 'number is too small';
	else if (isNaN(input_value)) newMsg = msg + '\n' + 'this is not a number';
	else newMsg = msg;

	input_value = prompt(newMsg);
}
