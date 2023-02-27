const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
 
var randomSentences = 
[
  'Don’t hold onto things that require a tight grip.',
  'And into the forest I go,to lose my mind and find my soul.',
  'Each time you break your own boundaries to ensure that someone else likes you, you like yourself a little less.'
]



//funcao CallBack
function handleClick(event){
  event.preventDefault()

  if(handleClick)
  {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    document.querySelector(".screen2 #fortune").innerText = `${randomSentences}`
  }
}


/*Event*/

const cookie = document.querySelector("#cookie")
const buttonReset = document.querySelector("#buttonReset")

cookie.addEventListener('click', handleClick)
buttonReset.addEventListener('click', function(){
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
})