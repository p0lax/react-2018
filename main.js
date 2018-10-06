// download data

var arr = [
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '1', name: 'Молоко', price: '100 рублей' },
	{ id: '2', name: 'Хлеб', price: '100 рублей' },
	{ id: '3', name: 'Порошок', price: '100 рублей' },
	{ id: '4', name: 'Кокс', price: '1000 рублей' },
	{ id: '5', name: 'Каша', price: '10 рублей' }
];
var ctr = document.querySelector('#container');

arr.map((item) => {	
	var node = document.createElement('div');
	node.innerHTML = `Товар: ${item.name} <br /> Стоимость: ${item.price}`;
	ctr.appendChild(node);
});
