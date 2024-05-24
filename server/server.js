const dotenv = require('dotenv');
dotenv.config();

const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

const authRouter = require('./src/routes/authRoutes');

const { PORT, GOOGLE_CREDENTIALS } = process.env;
const port = PORT || 4000;
const app = express();

// SDK 초기화
const serviceAccount = require(`${GOOGLE_CREDENTIALS}`);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://dotstar-c1c09-default-rtdb.asia-southeast1.firebasedatabase.app/',
});

// cors 옵션 설정
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/auth', authRouter);

// 서버 구동
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
