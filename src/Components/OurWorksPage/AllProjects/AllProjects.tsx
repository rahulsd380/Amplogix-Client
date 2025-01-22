import ProjectCard from "../ProjectCard/ProjectCard";

const AllProjects = () => {
    return (
        <div className="flex flex-col gap-16">
            <ProjectCard flexDirection="flex-row-reverse"/>
            <ProjectCard flexDirection="flex-row" />
            <ProjectCard flexDirection="flex-row-reverse"/>
            <ProjectCard flexDirection="flex-row" />
        </div>
    );
};

export default AllProjects;