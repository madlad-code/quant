import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Quant Project',
      description: 'A simple quant project that prints "quant mf" in a Python file. This project is hosted on GitHub and demonstrates basic functionality.',
      githubUrl: 'https://github.com/madlad-code/quant',
      previewImage: '/assets/quant.png' // Place your image at public/assets/quant.png
    },
    // Additional projects can be added here.
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div 
        className="projects-grid" 
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;
