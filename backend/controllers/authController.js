const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = [
    { id: 1, username: 'admin', password: bcrypt.hashSync('password', 10) } // Захешируем пароль
];

const login = async (req, res) => {
    try {
        const { username } = req.body;

        // Найти пользователя по имени
        const user = users.find(u => u.username === username);

        // Проверка на существование пользователя
        if (!user) {
            return res.status(200).json({ message: 'Invalid credentials' , error: 400});
        }

        // Создать токен
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Установить токен в cookie и вернуть ответ
        return res.cookie('session', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 })
            .status(200)
            .json({ message: 'Login successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { login };
