const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true
    },
    total:{
        type: String,
        trim: true,
    },
    pagar:{
        type: String,
        trim: true,
    },
    discount: {
        type: String,
        trim: true,
    },
    created:{
        type: Boolean,
        trim: true,
    },
    coupon:{ 
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('users',UserSchema);