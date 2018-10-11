module.exports = (app) => {
    const products = require('../controllers/provider.controller.js');

    // Create a new item
    app.post('/provider', provider.create);

    // Retrieve all item
    app.get('/products', provider.findAll);

    // Retrieve a single Note with itemId
    app.get('/products/:productId', provider.findOne);

    // Update a Note with itemId
    app.put('/products/:productId', provider.update);

    // Delete a Note with itemId
    app.delete('/products/:productId', provider.delete);
}
