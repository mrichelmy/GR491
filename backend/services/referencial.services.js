const Projects = require('../models/projects');
const referencialData = require('../data/gr491.json');

exports.initializeReferencials = async (projectId) => {
    try {
        let project = await Projects.findById(projectId);
        for(let theme in referencialData){
            for(let ref in referencialData[theme]) {
                project.referencials.push(
                    {
                        "idRef":referencialData[theme][ref].id
                    }
                );
            }
        }
        project.save();
        return project;
    } catch(error) {
        throw error;
    }
};

exports.updateReferencial = async (projectId, referencialId, data) => {
    try {
        let project = await Projects.findById(projectId) ;
        project.referencials.id(referencialId).state = data.state;
        project.save();
        return project.referencials.id(referencialId);
    } catch(error) {
        throw error;
    }
};