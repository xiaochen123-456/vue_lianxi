const mongoose = require('mongoose')
const baseModel = require('./base-model')

const articleSchema = new mongoose.Schema({
    ...baseModel,
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        default:null
    },
    image:{
        type:String,
        default:null
    }
})

module.exports = articleSchema