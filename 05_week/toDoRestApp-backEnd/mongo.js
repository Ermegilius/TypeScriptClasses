const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    const todoSchema = new mongoose.Schema({
        text: String
    });
    const Todo = mongoose.model('new task', todoSchema);
}

module.exports = mongoose.model('Todo', todoSchema);