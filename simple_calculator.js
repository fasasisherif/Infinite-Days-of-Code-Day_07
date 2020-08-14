const eachBtn = () => {
let calculator = document.querySelectorAll("div")
let question = document.querySelector(".question")
let otherBtn = document.querySelectorAll("section")
	
calculator.forEach(calc => calc.addEventListener("click", function(e){
		question.innerText = question.innerText + e.target.innerText
	}))	

otherBtn[2].addEventListener("click",() => {
		question.innerText = ""
		})
		
otherBtn[3].addEventListener("click",() => {
		question.innerText = question.innerText.slice(0,question.innerText.length - 1)
		})

otherBtn[4].addEventListener("click",() => {
		otherBtn[1].innerText = eval(question.innerText)
		})
  }
eachBtn()
