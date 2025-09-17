import React from 'react';
import './style.css';

const Projects = (props) => {
  const myProjects = (
    <div>
      {props.projects.map((proj) =>
        <div className='item' key={proj.title}>
          <h3>
            <strong>{proj.title}</strong> | <span className='tech-stack'>{proj.techStack}</span>
            <span className='dataPosition'>{proj.startDate} - {proj.endDate}</span>
          </h3>
          <ul className="project-description-list">
            {proj.projectDescription.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <h2>SELECTIVE PROJECTS</h2>
      {myProjects}
    </div>
  )
};

export default Projects;
