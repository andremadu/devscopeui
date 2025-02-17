const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // Permite chamadas da UI
app.use(express.json());

// Configuração do multer (onde os ficheiros serão guardados)
const storage = multer.diskStorage({
    destination: 'uploads/', // Pasta onde os ficheiros serão guardados
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Garante nomes únicos
    }
});

const upload = multer({ storage });

// Rota para upload de ficheiros
app.post('/upload', upload.single('component'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Nenhum ficheiro enviado' });
    }
    res.json({ message: 'Upload bem-sucedido!', filename: req.file.filename });
});

// Servir ficheiros públicos (caso queiras mostrar os componentes diretamente)
app.use('/uploads', express.static('uploads'));

app.listen(5000, () => console.log('Servidor a correr em http://localhost:5000'));
