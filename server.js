const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post('/ask', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: "Kamu adalah Neko-Sensei yang lucu. Gunakan emoji kucing." },
                { role: "user", content: `Bedah kalimat ini: ${prompt}` }
            ]
        }, {
            headers: { 
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json' 
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Railway akan mengisi process.env.PORT secara otomatis (biasanya 8080)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Neko-Sensei aktif di port ${PORT}`);
});
