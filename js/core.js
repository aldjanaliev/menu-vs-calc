const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const menuHeight = document.querySelector('.menu').scrollHeight

burger.addEventListener('click', function(){
	if(this.classList.contains('active')){
		this.classList.remove('active')
		menu.style.height = 0
		menu.classList.remove('active')
	} else{
		this.classList.add('active')
		menu.classList.add('active')
		menu.style.height = menuHeight + "px"
	}
})



const input1 = document.querySelector('.input-1')
const input2 = document.querySelector('.input-2')
const text = document.querySelector('.text')

const btnPlus = document.querySelector('.btn-plus')
const btnMinus = document.querySelector('.btn-minus')
const btnMulty = document.querySelector('.btn-multy')
const btnDivision = document.querySelector('.btn-division')
const btnDegree = document.querySelector('.btn-degree')

const btnResult = document.querySelector('.btn-result')

const btnCalc = document.querySelectorAll('.btn-calc')

btnCalc.forEach(function(el){
	el.addEventListener('click', function(){
		if(el.classList.contains('active')){
			el.classList.remove('active')
		} else{

			btnCalc.forEach(function(item){
				if(item.classList.contains('active')){
					item.classList.remove('active')
				}
			})

			el.classList.add('active')
		}
	})
})

btnResult.addEventListener('click', function(){
	const btnCalcActive = document.querySelector('.btn-calc.active')
	if(btnCalcActive.classList.contains('btn-plus')){
		text.innerText = +input1.value + +input2.value
	} else if(btnCalcActive.classList.contains('btn-minus')){
		text.innerText = input1.value - input2.value
	} else if(btnCalcActive.classList.contains('btn-multy')){
		text.innerText = input1.value * input2.value
	} else if(btnCalcActive.classList.contains('btn-division')){
		text.innerText = Math.round((input1.value / input2.value) * 1000) / 1000
	} else if(btnCalcActive.classList.contains('btn-degree')){
		text.innerText = input1.value ** input2.value
	}
})

