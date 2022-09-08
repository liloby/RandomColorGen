const hex = document.querySelector('.hex')
const btn = document.querySelector('.generate')
const box = document.querySelector('.counter-div')

const generateColor = () => {
  let randomColor = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = "#" + randomColor
  hex.innerHTML = "#" + randomColor
  box.classList.add('stylish')
}

btn.addEventListener('click', generateColor)