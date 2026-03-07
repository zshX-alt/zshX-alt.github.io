async function send(){

const input=document.getElementById("input")
const message=input.value

const res=await fetch("https://zshx-altgithubio-production.up.railway.app/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
})

const data=await res.json()

console.log(data)

}