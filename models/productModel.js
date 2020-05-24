const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require('./categoryModel');
const User = require('./userModel');
const Review = require('./reviewModel');



const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    wholesaler: {
        type: Schema.Types.ObjectId,
        ref: 'Wholesaler',
        required: true
    },

    price: {
        type: String,
        required: true
    },

    image: {
        type: String    //in form of image url
    },

    numberAvailable: {
        type: Number,
        required: true
    },

    userReviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
}, 

{timestamps: true}
);


module.exports = mongoose.model('Product', productSchema);


