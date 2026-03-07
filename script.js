async function send(){

const input = document.getElementById("input")
const message = input.value

if(!message) return

const messages = document.getElementById("messages")

messages.innerHTML += `<p><b>You:</b> ${message}</p>`

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message
})
})

const data = await res.json()

messages.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`

input.value=""

messages.scrollTop = messages.scrollHeight

}