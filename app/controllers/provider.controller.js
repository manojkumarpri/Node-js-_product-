const Provider = require('../model/provider.model.js');

// Create and Save a new provider
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "providerr name can not be empty"
        });
    }

    // Create a provider
    const provider= new Provider({
       // Id: req.body.Id || "there is no ID for this product!", 
       

         prodId:req.body.prodId,
        provider_name:req.body.provider_name,
        provider_id:req.body.provider_id,
        provider_address: req.body.provider_address,
        lat:req.body.lat,        
        lon: req.body.lon,
        zoom:req.body.zoom,      
        price:req.body.price,
        tax:req.body.tax,
        today_status:req.body.today_status,
        provider_mobile_number:req.body.provider_mobile_number,
        available:req.body.available,
        quantity:req.body.quantity,
        isActive:req.body.isActive     
            });

    // Save provider in the database
    provider.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the provider."
        });
    });
};

// Retrieve and return all providers from the database.
exports.findAll = (req, res) => {
    Provider.find()
    .then(provider => {
        res.send(provider);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving providers."
        });
    });
};

// Find a single provider with a providerId
exports.findAll = (req, res) => {
    Provider.find({prodId:req.params.prodId})
    .then(provider => {
        if(!provider) {
            return res.status(404).send({
                message: "provider not found with id " + req.params.prodId
            });            
        }
        res.send(provider);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "provider not found with id " + req.params.prodId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving provider with id " + req.params.prodId

        });
    });
};
// Update a provider identified by the providerId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.provider_name) {
        return res.status(400).send({
            message: "provider_namecan not be empty"
        });
    }

    // Find provider and update it with the request body
    Provider.findOneAndUpdate({prodId:req.params.prodId}, {
        //Id: req.body.Id || "there is no ID for this order!", 
       prodId:req.body.prodId,
        provider_name:req.body.provider_name,
        provider_id:req.body.provider_id,
        provider_address: req.body.provider_address,
        lat:req.body.lat,        
        lon: req.body.lon,
        zoom:req.body.zoom,      
        price:req.body.price,
        tax:req.body.tax,
        today_status:req.body.today_status,
        provider_mobile_number:req.body.provider_mobile_number,
        available:req.body.available,
        quantity:req.body.quantity,
        isActive:req.body.isActive     

    }, {new: true})
    .then(provider => {
        if(!provider) {
            return res.status(404).send({
                message: "provider not found with id " + req.params.prodId
            });
        }
        res.send(provider);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "provider not found with id " + req.params.prodId
            });                
        }
        return res.status(500).send({
            message: "Error updating provider with id " + req.params.prodId
        });
    });
};

/*{new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
*/

// Delete a provider with the specified prodId in the request
exports.delete = (req, res) => {
    Provider.findOneAndRemove({_Id:req.params.prodId})
    .then(provider => {
        if(!provider) {
            return res.status(404).send({
                message: "provider not found with id " + req.params.prodId
            });
        }
        res.send({message: "provider deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "provider not found with id " + req.params.prodId
            });                
        }
        return res.status(500).send({
            message: "Could not delete provider with id " + req.params.prodId
        });
    });
};
