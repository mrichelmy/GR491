export default function ProjectCard(props) {
    const currentProject = props.project;
    return(
        <div class="project_box">
            <h2>Project information</h2>
            <div class='separator'>
                <span class='project_information_key'>Name</span>
                <span class='project_information_value'>{currentProject.name}</span>
            </div>
            <div class='separator'>
                <span class='project_information_key'>Customer</span>
                <span class='project_information_value'>{currentProject.customer}</span>
            </div>
            <div class='separator'>
                <span class='project_information_key'>Description</span>
                <span class='project_information_value'>{currentProject.description}</span>
            </div>
      </div>
    )
}