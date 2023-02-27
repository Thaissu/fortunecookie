const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
 
const fortune = 
[
  'Don’t hold onto things that require a tight grip.',
  'And into the forest I go,to lose my mind and find my soul. John Muir',
  'Each time you break your own boundaries to ensure that someone else likes you, you like yourself a little less.',
  'Sitting in silence with you is all the noise I need.',
  'There is nothing stronger than a broken woman who has rebuilt herself.',
  'One bad chapter does not mean your story is over.',
  'You must expect great things of yourself before you can do them. Michael Jordan',
  'The most effective way to do it, is to do it. Amelia Earhart '
]

function pickFortune() {
  let allFortunes = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortunes)  
  screen2.querySelector("#fortune").innerText = `${fortune[randomNumber]}`
}



//funcao CallBack
function handleClick(event){

  pickFortune()

  if(handleClick)
  {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
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
