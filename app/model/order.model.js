const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const OrderSchema = mongoose.Schema({
        _Id:Number,
        cust_id:Number,
        name:String,
		img: String,
		prodCategory:String,		
		shopCategory: String,
	    rating:Number,		
	    shortDesc:String,
		longDesc:String,
		size:Number,
	    price:Number,
		quantity:Number,
		sku:String,		
	    BrandName:String,
		discount:Number,
		tax:Number,
		shopName:String,
		prodId:Number,
		review:String,
		total:Number,
		checked:Number



}, {
    timestamps: true
});

OrderSchema.plugin(AutoIncrement, {inc_field: '_Id'});
module.exports = mongoose.model('order', OrderSchema);