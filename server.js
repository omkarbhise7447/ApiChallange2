const express = require('express');
const app = express();

app.use(express.json());

port = process.env.PORT || 3000;

app.post('process-array', (req, res) => {   
    try {
        const { data } = req.body;
    
        if(!Array.isArray(data)) {
            return res.status(400).json({ message: 'Data must be an array' });
        }
        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];

        data.forEach((item) => {
            if(!isNaN(item)) {
                const num = parseInt(item, 10);
                if(num % 2 === 0) {
                    evenNumbers.push(num);
                } else {
                    oddNumbers.push(num);
                }
            } else if(/^[a-zA-Z]$/.test(item)) {
                alphabets.push(item.toUpperCase());
            }
        });
        res.json({
            is_success: true,
            user_id: "john_doe_17091997",
            email: "johndoe@gmail.com",
            rollNumber: 123456,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets
        });
        
    } catch (error) {
        res.status(500).json({is_success: false, message: "server error"}); 
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});