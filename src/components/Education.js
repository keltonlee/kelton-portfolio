import React from 'react';
import './style.css';

const Education = (props) => {
  const itemStyle = {
    marginBottom: '2px' // Adjust this value as needed
  };

  const myEducation = (
    <div>
      {props.education.map((edu) =>
        <div className='item' key={edu.degree} style={itemStyle}>
          <h3>{edu.degree} @ {edu.institution} <span className='dataPosition'>{edu.startDate} - {edu.endDate}</span></h3>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-graduation-cap'></i>
      <h2>EDUCATION</h2>
      {myEducation}
    </div>
  )
};

export default Education;
