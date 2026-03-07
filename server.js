const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Memberi izin akses untuk GitHub Pages Anda
app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post('/ask', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: "Kamu adalah Neko-Sensei, guru bahasa Jepang yang lucu dan membantu. Gunakan emoji kucing." },
                { role: "user", content: `Bedah tata bahasa ini: ${prompt}` }
            ]
        }, {
            headers: { 
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json' 
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Neko-Sensei sedang lelah, coba lagi nanti!" });
    }
});

// PENTING: Railway akan menentukan PORT secara otomatis
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Neko-Sensei aktif di port ${PORT}`));
