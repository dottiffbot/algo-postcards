

let name = 0


const firstName = [
"munus✌", "lia✌", "lingyi", "lauria", "emily✌", "zoe✌", "anna", "ying", "sydney",
"carla✌", "jessie", "shamail✌", "zhicun", "simone", "minghui✌", "nikki✌", "bhuvaneesh", "justin","talia✌"
]

const student= document.querySelector(".student")

// if the length is odd, add another charcter....

function randomName(){
 name = Math.floor( Math.random() * firstName.length )
}

const printName = function(){

	// put each character in the string in the array in it's own div
	const characters = Array.from(firstName[name])
	console.log(characters)

	characters.forEach(character =>{
		const letter = document.createElement("div")
		letter.classList.add('letters')
		letter.innerHTML = character
		student.appendChild(letter)

	})

// now shuffle the order of the divs (fisher-yates style)
	for (let i = student.children.length;
	i >= 0 ; i --){
	student.appendChild(student.children[Math.random() * i | 0])
   }

}



randomName()
printName()



