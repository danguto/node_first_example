/**
 * Created by dangu on 30/11/2016.
 */

module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
}
