const Projects = require("../models/projects");

exports.findProjects = async () => {
    try {
        const projects = await Projects.find({});
        return projects;
    } catch(error) {
        throw error;
    }
};

exports.createProject = async (projectData) => {
    try {
        const newProject = await Projects.create(projectData);
        return newProject;
    } catch(error) {
        throw error ;
    }
};

exports.removeProjects = async () => {
    try{
        const projectsRemoved = await Projects.deleteMany({});
        return projectsRemoved ;
    } catch(error) {
        throw error;
    }
};

exports.findProjectById = async (projectId) => {
    try {
        const project = await Projects.findById(projectId);
        return project;
    } catch(error) {
        throw error ;
    }
};

exports.updateProjectById = async (projectId, data) => {
    try {
        const updatedProject = await Projects.findByIdAndUpdate(projectId,
            {
                $set: data
            }, 
            { new: true});
        return updatedProject;
    } catch(error) {
        throw error ;
    }
};

exports.removeProjectById = async (projectId) => {
    try {
        const removedProject = await Projects.findByIdAndRemove(projectId);
        return removedProject;
    } catch(error) {
        throw error;
    }
};