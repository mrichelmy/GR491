const projectService = require('../services/project.services');
const referencialService = require('../services/referencial.services');

exports.GetAllProjects = async(req, res, next) => {
    try {
        const projectsData = await projectService.findProjects();
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'application/json');
        res.json(projectsData);
    } catch(error) {
        res.statusCode = 500 ;
        res.end("Projects not found");
    }
};

exports.AddNewProject = async(req, res, next) => {
    const newProjectData = req.body;
    try{
        const newProject = await projectService.createProject(newProjectData);
        const initializedProject = await referencialService.initializeReferencials(newProject._id);
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'application/json');
        res.json(initializedProject);
    } catch(error) {
        res.statusCode = 500 ;
        res.json({ message: error.message });
        res.end("Cannot create your project");
    }
};

exports.RemoveAllProjects = async (req, res, next)=> {
    try {
        const removedData = await projectService.removeProjects();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(removedData);
    } catch(error) {
        res.statusCode = 500 ;
        res.end("Cannot remove all projects");
    }
};

exports.FindProject = async (req, res, next) => {
    const id = req.params.projectId;
    try {
        const project = await projectService.findProjectById(id);
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    } catch(error) {
        res.statusCode = 500 ;
        res.end("Project "+id+ " not found");
    }
};

exports.UpdateProject = async (req, res, next)=> {
    const id = req.params.projectId;
    const updateData = req.body ;
    try {
        let updatedProject = await projectService.updateProjectById(id, updateData);
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'application/json');
        res.json(updatedProject);
    } catch(error) {
        res.statusCode = 500 ;
        res.end("Cannot update project "+id);
    }
};

exports.RemoveProject = async (req, res, next)=> {
    const id = req.params.projectId;
    try {
        const removedProject = projectService.removeProjectById(id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(removedProject);
    } catch(error) {
        res.statusCode = 500 ;
        res.end("Cannot remove project "+id);
    }
};