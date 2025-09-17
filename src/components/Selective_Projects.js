import React from 'react';
import './style.css';

const Projects = (props) => {
  const myProjects = (
    <div>
      {props.projects.map((proj) =>
        <div className='item' key={proj.title}>
          <h3 className="project-title-line">
            <strong>{proj.title}</strong>
            {proj.startDate && proj.endDate && (
              <span className='dataPosition'>{proj.startDate} - {proj.endDate}</span>
            )}
          </h3>

          {/* 新增這一行，把 tech stack 放到 title & date 的下一行 */}
          {proj.techStack && (
            <p className="tech-stack">{proj.techStack}</p>
          )}

          {proj.projectDescription?.length > 0 && (
            <ul className="project-description-list">
              {proj.projectDescription.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          )}
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
  );
};

export default Projects;
