// let newp = document.createElement('p')
// newp.innerText = "Hey, I'm red!"
// newp.style.color = "red"
// newp.style.fontSize = "50px"
// let body = document.querySelector('body')
// body.append(newp)
// let hedding = document.createElement('h3')
// hedding.innerText = "I'm a blue h3"
// hedding.style.color="blue"
// hedding.style.fontSize="50px"
// body.append(hedding)
// let div = document.createElement('div')
// div.style.border = "2px solid black"
// div.style.backgroundColor = "pink"
// body.append(div)
// let newH = document.createElement("h1")
// newH.innerText = " I'm in a div "
// newH.style.fontSize = '50px'
// div.append(newH)
// let parra = document.createElement('p')
// parra.innerText = ' ME TOO!'
// parra.style.fontSize = "50px"
// div.insertAdjacentElement('beforeend', parra)


// ........... Activity.........//
//............. generate Random color........//



// let btn = document.querySelector("button")
 
// btn.addEventListener('click', function(){
    
//     let h1 = document.querySelector("h1")
//     // let randomColor = getRandomColor();
    
//     h1.innerText =   getRandomColor();
//     let div =  document.querySelector("div")
//     div.style.backgroundColor =  getRandomColor();
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255)
//     let green = Math.floor(Math.random() * 255)
//     let blue = Math.floor(Math.random() * 255)
     
//     let color = `rgb(${red}, ${green}, ${blue})`
//     return color;

// }



// .................activity...........//
// ....Create a Todo app with DOM......//

let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")


btn.addEventListener("click", function(event){
    let item = document.createElement("li")


    let delbtn = document.createElement("button")
    delbtn.innerText = "delete"
    delbtn.classList.add("delete")
    item.appendChild(delbtn)


    item.innerText = inp.value
    ul.appendChild(item)
    inp.value =  ""

})


