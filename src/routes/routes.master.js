const express = require('express');
const router = express.Router();

const controllerRequests = require('../controllers/requests.controller');
const controllerResponsibles = require('../controllers/responsibles.controller');

// APP WEB 

router.get('/list/request', controllerRequests.list);
router.get('/search/request/:id', controllerRequests.searchRequest);
router.post('/create/request', controllerRequests.createRequest);
router.put('/update/request/:id', controllerRequests.update);
router.put('/updateDate/request/:id', controllerRequests.updateDate);
router.put('/updateResponsible/request/:id', controllerRequests.updateResponsible);


router.get('/list/responsible', controllerResponsibles.list);



//name, email, companyName, lastName, contactNumber, typeRequest, description

// router.post('/crear', controller.crear);
// router.put('/actualizar/:id', controller.actualizar);
// router.get('/obtenerCategoria/:id', controller.obtenerCategoria);
// router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;