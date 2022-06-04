const list = document.getElementById("list")


// li.textContent = 'First element'


// list.appendChild(li)

const arrayElement = ['First element', 'Second element', 'Third element']

// arrayElement.forEach(item => {
//   const li = document.createElement('li')
//   li.textContent = item
//   list.appendChild(li)
// })


arrayElement.forEach(item => {
  list.innerHTML += `<li>${item}</li>`
})