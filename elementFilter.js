function elementFilter(classElement, filterClassElement, toggleClass) {

	var x, i;

	x = document.getElementsByClassName(classElement);

	if (filterClassElement == "") {
		
		filterClassElement = "";
	
	}

	for (i = 0; i < x.length; i++) {

		removeClass(x[i], toggleClass);

		if (x[i].className.indexOf(filterClassElement) > -1) {

			addClass(x[i], toggleClass);

		}

	}

}

function addClass(element, name) {

	var i, firstArray, secondArray;

	firstArray = element.className.split(" ");

	secondArray = name.split(" ");

	for (i = 0; i < secondArray.length; i++) {

		if (firstArray.indexOf(secondArray[i]) == -1) {

			element.className += " " + secondArray[i];

		}

	}

}

function removeClass(element, name) {

	var i, firstArray, secondArray;

	firstArray = element.className.split(" ");

	secondArray = name.split(" ");

	for (i = 0; i < secondArray.length; i++) {

		while (firstArray.indexOf(secondArray[i]) > -1) {

			firstArray.splice(firstArray.indexOf(secondArray[i]), 1); 

		}

	}

	element.className = firstArray.join(" ");

}
