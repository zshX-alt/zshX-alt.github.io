import express from "express"
import cors from "cors"
import Groq from "groq-sdk"

const app = express()

app.use(cors())
app.use(express.json())

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

app.get("/", (req,res)=>{
  res.send("Server hidup")
})

app.post("/api/chat", async (req,res)=>{

  try {

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: req.body.message
        }
      ],
      model: "llama3-8b-8192"
    })

    res.json({
      reply: completion.choices[0].message.content
    })

  } catch (err) {

    res.json({
      error: err.message
    })

  }

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})