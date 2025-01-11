let	shoppingList = ["milk", "eggs", "bread"];

// method 1 if using forEach
//shoppingList.forEach(item => console.log(item));

// method 2 if using forEach in a more exciplit way 

// shoppingList.forEach( (item, index) => {
// 	console.log(`Index ${index + 1} Item : ${item}`);
// });


shoppingList.push("oliver oil");
shoppingList.push("sea salt");


// How to remove elements
//
// method 1 : remove the first element
//shoppingList.shift();


// method 2 : remove the last elementz
//shoppingLast.pop();


// method 3 : splice()
// Syntax: array.splice(startIndex, deleteCount)
// deleteCount how many elements to remove starting from startIndex
//shoppingLast.splice(shoppingLast.length -1, 1);


// method 4 : Spread operator + slice()


//shoppingList.forEach( item => console.log(item));


//console.log(shoppingList[shoppingList.length - 1]);



// traditional method
function printAll(arr) {
	if (isFull(arr) === 1)
		return ;
	let	i = 0;
	while (i < arr.length) {
		console.log(`${i+1}. ${arr[i]}`);
		i++;
	}
	return ;
}

function isFull(arr) {
	let	i = 0;
	while (i < arr.length) {
		if (i === 5) {
			console.log("Your shopping list is full!");
			return (1);
		}
		i++;
	}
	return (0);
}

printAll(shoppingList);
shoppingList.push("tonic water");
//shoppingList.push("peanut butter");
printAll(shoppingList);


function inShoppingList(item) {
	const	localItem = item.toLowerCase();
	let	i = 0;
	while (i < shoppingList.length) {
		if (localItem === shoppingList[i])
			return (console.log(`${item} is in the list`));
		i++;
	}
	return (console.log(`${item} is not in the list`));
}

inShoppingList("milk");
inShoppingList("apple");
inShoppingList("MILK");



let	item = {
	name: "milk",
	price: "95p",
	quantity: 1
}



// Method 1 : Using dot notation
// Method 2:  Using bracket notation
// Method 3: print entire object
// Method 4: Using Object.values()
// Method 5: Using Object.entries()


// Method 1 : Using dot notation
function printObject(obj) {
	console.log(obj.name);
	console.log(obj.price);
	console.log(obj.quantity);
}

printObject(item);

// Method 2:  Using bracket notation
function printObjectBracket(obj) {
	console.log(obj["name"]);
	console.log(obj["price"]);
	console.log(obj["quantity"]);
}

printObjectBracket(item);
// Method 3: print entire object
console.log(item);
// Method 4: Using Object.values()
console.log(Object.values(item));
// Method 5: Using Object.entries()
console.log(Object.entries(item));  


