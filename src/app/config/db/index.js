const mongoose = require('mongoose');

async function db() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Conection DB Successfully!');
    } catch (enrror) {
        console.log('Conection DB Fail!');
    }
}

module.exports = { db };
