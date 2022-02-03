var express= require('express');
const projectCtrl = require('../controllers/project.controllers');
const referencialCtrl = require('../controllers/referencial.controllers');
const projectRouter = express.Router();
projectRouter.use(express.json());

// TODO : take into account wrong routes 
projectRouter.route('/')
.get(projectCtrl.GetAllProjects)
.post(projectCtrl.AddNewProject)
.delete(projectCtrl.RemoveAllProjects);

projectRouter.route('/:projectId')
.get(projectCtrl.FindProject)
.put(projectCtrl.UpdateProject)
.delete(projectCtrl.RemoveProject);

projectRouter.route('/:projectId/:referencialId')
.put(referencialCtrl.UpdateReferencial);

module.exports = projectRouter;