const form = document.getElementById('form')
const name = document.getElementById('n')
const email = document.getElementById('em')
const errorElement = document.getElementById('error')
const msg = document.getElementById('msg')
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value == "") {
        messages.push('Please provide your name!')
    }

    if (email.value == "") {
        messages.push('Please provide your email!')

    }
    if (msg.value == "") {
        messages.push("Please leave your message! ");

    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})