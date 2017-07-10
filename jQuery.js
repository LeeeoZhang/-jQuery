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
	


	//移除元素class
	array.removeClass = function(className) {
        for(let i=0; i<array.length; i++) {
            array[i].classList.remove(className)
        }
        return array
	}



	//轮换元素class
	array.toggleClass = function(className) {
        for (let i = 0; i < array.length; i++) {
            array[i].classList.toggle(className)
        }
        return array
    }



    //获取或修改元素的text
    //这里我们把获取每一个元素的text，组成数组
    array.text = function(value) {
    	if(value === undefined) {
    		let result = []
    		for(let i=0; i<array.length; i++) {
    			result.push(array[i].textContent)
    		}
    	} else {
    		for(let i=0; i<array.length; i++) {
    			array[0].textContent = value
    		}
    		return array
    	}
    }



    //获取或修改元素的html
    array.html = function(value) {
		if(value === undefined) {
			let result = []
			for(let i=0; i<array.length; i++) {
				result.push(array[i].innerHTML)
			}
		} else {
			for(let i=0; i<array.length; i++) {
				array[0].innerHTML = value
			}
			return array
		}
}    


	return array
}