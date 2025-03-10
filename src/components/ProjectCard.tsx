export interface Project {
    title: string;
    description: string;
    githubUrl: string;
    previewImage: string;
  }
  
  interface ProjectCardProps {
    project: Project;
    onClick: () => void;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
      <div 
        className="project-card" 
        onClick={onClick} 
        style={{
          cursor: 'pointer',
          border: '1px solid #ccc',
          padding: '1rem',
          margin: '1rem',
          width: '280px'
        }}>
        <img 
          src={project.previewImage} 
          alt={`${project.title} preview`} 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
        <h3>{project.title}</h3>
        <p>{project.description.substring(0, 100)}...</p>
      </div>
    );
  };
  
  export default ProjectCard;
  