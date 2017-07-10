window.$ = function(select) {
	let element = querySelectorAll(select)
	let array = []
	for(let i=0; i<element.length; i++) {
		array.push(element[i])
	}



	//事件绑定
	array.on = function(event,handle) {
		for(let i=0; i<array.length; i++) {
			array[i].addEventListener(event,handle)
		}
		return array
	}




	//增加元素class
	array.addClass = function(className) {
		for(let i=0; i<array.length; i++) {
			array[i].classList.add(className)
		}
		return array
	}




	return array
}