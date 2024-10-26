const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Указываем разрешенный домен
    credentials: true // Разрешаем передачу куков
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
