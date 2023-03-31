import '@shoelace-style/shoelace/dist/components/button/button'
import '@shoelace-style/shoelace/dist/themes/light.css'

console.log('salut la foule')

// app.js
// create an html component, and add it to the DOM
const f = () => {
    const div = document.createElement('div')
    div.innerHTML = 'hello world !!!'
    document.body.appendChild(div)
}

f()
