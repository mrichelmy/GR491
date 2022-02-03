const referencialService = require('../services/referencial.services');

exports.UpdateReferencial = async (req,res,next) => {
    const projectId = req.params.projectId;
    const refId = req.params.referencialId;
    const data = req.body;
    try {
        const updatedRef = await referencialService.updateReferencial(projectId, refId, data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(updatedRef);
    } catch(error) {
        err = new Error('Refenrencial ' + req.params.referencialId + ' not found');
        err.status = 404 ;
        return next(err);
    }
};