const mongoClient = require('mongoose')

const userSchema = mongoClient.Schema ({
    id: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    role : {
        type: Number,
        require: true
    },
    insertedDate : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoClient.model('userCollection', userSchema)