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




	return array
}