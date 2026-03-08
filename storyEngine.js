function startStory(){

document.getElementById("app").innerHTML=`
<h2>Tokyo Arrival</h2>

<p>Sensei: 東京へようこそ。</p>
<p>NPC: コーヒーを注文してください。</p>

<button onclick="storyAnswer('コーヒーください')">
コーヒーください
</button>

<button onclick="storyAnswer('コーヒーをください')">
コーヒーをください
</button>
`

}

function storyAnswer(a){

if(a=="コーヒーをください"){
alert("Sensei: 正しい日本語です！")
}else{
alert("Sensei: partikel を hilang")
}

}