import React from 'react';
import { Project } from './ProjectCard';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{project.title}</h2>
        <img 
          src={project.previewImage} 
          alt={`${project.title} preview`} 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
        <p>{project.description}</p>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
