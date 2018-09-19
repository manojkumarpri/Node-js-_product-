const Order = require('../model/order.model.js');

// Create and Save a new order
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "customer name can not be empty"
        });
    }

    // Create a order
    const order= new Order({
       // Id: req.body.Id || "there is no ID for this product!", 
       

         _Id:req.body._Id,
        cust_id:req.body.cust_id,
        name:req.body.name,
        img: req.body.img,
        prodCategory:req.body.prodCategory,        
        shopCategory: req.body.shopCategory,
        rating:req.body.rating,      
        shortDesc:req.body.shortDesc,
        longDesc:req.body.longDesc,
        size:req.body.size,
        price:req.body.price,
        quantity:req.body.quantity,
        sku:req.body.sku,     
        BrandName:req.body.BrandName,
        discount:req.body.discount,
        tax:req.body.tax,
        shopName:req.body.shopName,
        prodId:req.body.prodId,
        review:req.body.review,
        total:req.body.total,
        checked:req.body.checked
    });

    // Save order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the orders."
        });
    });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    Order.find()
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};

// Find a single order with a orderId
exports.findAll = (req, res) => {
    Order.find({cust_id:req.params.orderId})
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderId
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving order with id " + req.params.orderId
        });
    });
};
// Update a order identified by the orderId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "product name can not be empty"
        });
    }

    // Find order and update it with the request body
    Order.findOneAndUpdate({_Id:req.params.orderId}, {
        //Id: req.body.Id || "there is no ID for this order!", 
        _Id:req.body._Id,
        cust_id:req.body.cust_id,
        name:req.body.name,
        img: req.body.img,
        prodCategory:req.body.prodCategory,        
        shopCategory: req.body.shopCategory,
        rating:req.body.rating,      
        shortDesc:req.body.shortDesc,
        longDesc:req.body.longDesc,
        size:req.body.size,
        price:req.body.price,
        quantity:req.body.quantity,
        sku:req.body.sku,     
        BrandName:req.body.BrandName,
        discount:req.body.discount,
        tax:req.body.tax,
        shopName:req.body.shopName,
        prodId:req.body.prodId,
        review:req.body.review,
        total:req.body.total,
        checked:req.body.checked
    }, {new: true})
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderId
            });
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error updating order with id " + req.params.orderId
        });
    });
};

/*{new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
*/

// Delete a order with the specified orderId in the request
exports.delete = (req, res) => {
    Order.findOneAndRemove({_Id:req.params.orderId})
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderId
            });
        }
        res.send({message: "order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Could not delete order with id " + req.params.orderId
        });
    });
};
